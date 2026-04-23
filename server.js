const express = require("express");
const mercadopago = require("mercadopago");
const cors = require("cors");
const { Server } = require("node:http");

const app = express();
app.use(express.json());
app.use(cors());

// 🔑 COLOQUE SEU ACCESS TOKEN AQUI
mercadopago.configure({
    access_token: "SEU_TOKEN_AQUI"
});

app.post("/criar-pagamento", async (req, res) => {
    const itens = req.body.itens;

    const preference = {
        items: itens.map(item => ({
            title: item.nome,
            unit_price: Number(item.preco),
            quantity: 1
        })),
        back_urls: {
            success: "http://localhost:5500/sucesso.html",
            failure: "http://localhost:5500/erro.html",
            pending: "http://localhost:5500/pendente.html"
        },
        auto_return: "approved"
    };

    try {
        const response = await mercadopago.preferences.create(preference);

        res.json({
            init_point: response.body.init_point
        });

    } catch (error) {
        console.log(error);
        res.status(500).send("Erro ao criar pagamento");
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

 $ node Server.js 