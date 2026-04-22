const express = require("express");
const mercadopago = require("mercadopago");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 🔑 COLOQUE SEU ACCESS TOKEN AQUI
mercadopago.configure({
   access_token: "00020126360014br.gov.bcb.pix0114+55169962708145204000053039865802BR5915T202510181550266009Sao Paulo610901227-20062240520daqr29341834794508086304E6CF"
});

app.post("/criar-pagamento", async (req, res) => {
    const itens = req.body.itens;

    const total = itens.reduce((acc, item) => acc + item.preco, 0);

    try {
        const pagamento = await mercadopago.payment.create({
            transaction_amount: total,
            description: "Compra na Thiago Store",
            payment_method_id: "pix",
            payer: {
                email: "cliente@email.com"
            }
        });

        res.json({
            qr_code: pagamento.body.point_of_interaction.transaction_data.qr_code,
            qr_code_base64: pagamento.body.point_of_interaction.transaction_data.qr_code_base64
        });

    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao gerar Pix");
    }
});
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});