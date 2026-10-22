#!/bin/sh
# Run as root with the public deploy key as $1, alongside intro-deploy-server.py.
set -eu
test "$(id -u)" = 0
key_file=$1
script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
live=/var/www/introduction.hylouis.top
base=/var/www/intro-deploy
backup=/root/intro-deploy-before-$(date -u +%Y%m%dT%H%M%SZ)
install -d -m 700 "$backup"
cp -a /etc/ssh/sshd_config "$backup/sshd_config"
if ! id deploy-intro >/dev/null 2>&1; then
  useradd --system --user-group --home-dir /var/lib/intro-deploy --shell /bin/sh deploy-intro
fi
install -d -m 755 -o root -g root /var/lib/intro-deploy /usr/local/libexec /etc/ssh/authorized_keys
install -m 755 -o root -g root "$script_dir/intro-deploy-server.py" /usr/local/libexec/intro-deploy
install -d -m 755 -o deploy-intro -g deploy-intro "$base" "$base/releases"
if [ ! -L "$base/current" ]; then
  seed=bootstrap-$(date -u +%Y%m%dT%H%M%SZ)
  cp -a "$live" "$base/releases/$seed"
  chown -R deploy-intro:deploy-intro "$base/releases/$seed"
  ln -s "releases/$seed" "$base/current"
  chown -h deploy-intro:deploy-intro "$base/current"
fi
printf 'restrict,command="/usr/local/libexec/intro-deploy" %s\n' "$(cat "$key_file")" > /etc/ssh/authorized_keys/deploy-intro
chmod 644 /etc/ssh/authorized_keys/deploy-intro
chown root:root /etc/ssh/authorized_keys/deploy-intro
cat > /etc/ssh/sshd_config.d/90-intro-deploy.conf <<'EOF'
Match User deploy-intro
    AuthorizedKeysFile /etc/ssh/authorized_keys/%u
    AuthenticationMethods publickey
    PasswordAuthentication no
    KbdInteractiveAuthentication no
    ForceCommand /usr/local/libexec/intro-deploy
    DisableForwarding yes
    PermitTTY no
    PermitTunnel no
    X11Forwarding no
Match all
EOF
if ! /usr/sbin/sshd -t; then
  mv /etc/ssh/sshd_config.d/90-intro-deploy.conf "$backup/rejected-90-intro-deploy.conf"
  exit 1
fi
nginx -t
if [ ! -L "$live" ]; then
  mv "$live" "$live.before-deploy-account-$(date -u +%Y%m%dT%H%M%SZ)"
  ln -s "$base/current" "$live"
fi
systemctl reload ssh
printf 'INSTALLED deploy-intro backup=%s\n' "$backup"
