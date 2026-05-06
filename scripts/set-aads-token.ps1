param(
  [switch]$WriteLocalEnv
)

$ErrorActionPreference = "Stop"

$token = Read-Host "Paste AADS access token" -AsSecureString
$bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($token)
try {
  $plain = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr)
} finally {
  if ($bstr -ne [IntPtr]::Zero) {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
  }
}

if ([string]::IsNullOrWhiteSpace($plain)) {
  throw "Token is empty."
}

[Environment]::SetEnvironmentVariable("AADS_ACCESS_TOKEN", $plain, "User")

if ($WriteLocalEnv) {
  $envPath = Join-Path (Get-Location) ".env.local"
  $content = @(
    "# Local secret file. Do not commit.",
    "AADS_ACCESS_TOKEN=$plain"
  )
  Set-Content -LiteralPath $envPath -Value $content -Encoding UTF8
  Write-Host "Wrote .env.local and user environment variable AADS_ACCESS_TOKEN."
} else {
  Write-Host "Wrote user environment variable AADS_ACCESS_TOKEN."
}

Write-Host "Open a new terminal before running scripts that need this token."
