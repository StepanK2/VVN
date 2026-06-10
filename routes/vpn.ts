export const handler = {
  GET() {
    return new Response("VPN OK", {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  },
};
