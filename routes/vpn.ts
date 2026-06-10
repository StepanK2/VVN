import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(request) {
    const targetUrl = "https://join.havefun.store/iam/hW80StXBsWZCbBCs";

    const modifiedHeaders = new Headers();

    modifiedHeaders.set("User-Agent", "Sing-box/1.13.13");
    modifiedHeaders.set("X-Device-Os", "Android");
    modifiedHeaders.set("X-Device-Model", "INFINIX X6833B");
    modifiedHeaders.set("X-Ver-Os", "15");
    modifiedHeaders.set("X-Device-Locale", "ru");
    modifiedHeaders.set("X-Hwid", "64jf75nf8f5jr6je");
    modifiedHeaders.set("X-Real-Ip", "185.162.94.17");
    modifiedHeaders.set("X-Forwarded-For", "185.162.94.17");

    try {
      const response = await fetch(targetUrl, {
        method: "GET",
        headers: modifiedHeaders,
      });

      const body = await response.text();

      const headers = new Headers(response.headers);

      headers.set("Profile-Title", "🕯️ VPN от Юрца");
      headers.set("announce", "✅ Пользуйтесь, друзья");
      headers.set("profile-web-page-url", "https://t.me/monocrystal");
      headers.set("support-url", "https://t.me/monocrystal");
      headers.set("Content-Type", "text/plain; charset=utf-8");

      return new Response(body, {
        status: response.status,
        headers,
      });

    } catch (error) {
      return new Response(`Proxy Error: ${error.message}`, {
        status: 500,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
        },
      });
    }
  },
};
