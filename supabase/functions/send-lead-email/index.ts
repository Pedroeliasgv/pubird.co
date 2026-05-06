const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const lead = await req.json();

    const html = `
      <div style="font-family:Arial,sans-serif;background:#0b0612;padding:24px;color:#fff;">
        <div style="max-width:620px;margin:auto;background:#15101f;border:1px solid #7c3aed55;border-radius:18px;padding:28px;">
          <h1 style="color:#a855f7;margin-bottom:8px;">Novo diagnóstico recebido</h1>
          <p style="color:#aaa;margin-bottom:24px;">Um novo lead preencheu o formulário da Pubird.</p>

          <div style="line-height:1.8;font-size:15px;">
            <p><strong>Nome:</strong> ${lead.nomeCompleto || "-"}</p>
            <p><strong>Empresa:</strong> ${lead.nome || "-"}</p>
            <p><strong>Email:</strong> ${lead.email || "-"}</p>
            <p><strong>Telefone:</strong> ${lead.telefone || "-"}</p>
            <p><strong>Faturamento:</strong> ${lead.faturamento || "-"}</p>
            <p><strong>Segmento:</strong> ${lead.segmento || "-"}</p>
            <p><strong>CNPJ:</strong> ${lead.cnpj || "-"}</p>
          </div>

          <a href="https://wa.me/${String(lead.telefone || "").replace(/\D/g, "")}"
             style="display:inline-block;margin-top:24px;background:#9333ea;color:white;text-decoration:none;padding:14px 18px;border-radius:10px;font-weight:bold;">
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Pubird <onboarding@resend.dev>",
        to: ["pedroeliasvale@gmail.com"],
        subject: `Novo diagnóstico: ${lead.nomeCompleto || "Lead Pubird"}`,
        html,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return new Response(JSON.stringify(data), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

