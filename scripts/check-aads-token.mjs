const token = process.env.AADS_ACCESS_TOKEN;

if (!token) {
  console.error("AADS_ACCESS_TOKEN is not set.");
  process.exit(1);
}

const visible = token.length <= 8
  ? `${token.slice(0, 2)}***`
  : `${token.slice(0, 4)}***${token.slice(-4)}`;

console.log(`AADS_ACCESS_TOKEN is available: ${visible}`);
