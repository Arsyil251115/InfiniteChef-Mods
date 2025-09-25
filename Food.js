ingredients.cream = {
    name: "Cream",
    color: "#fff5e6",
    category: "Dairy",
    description: "Kental dan lembut, dasar untuk banyak dessert.",
    type: "ingredient",
    calories: 200,
}

ingredients.vanilla_cream = {
    name: "Vanilla Cream",
    color: "#f5e6d3",
    category: "Dairy",
    description: "Cream dengan aroma vanilla.",
    type: "ingredient",
    reactions: {
        "Cold": { result: "Vanilla Ice Cream" }
    }
}

ingredients.matcha_cream = {
    name: "Matcha Cream",
    color: "#a4c639",
    category: "Dairy",
    description: "Cream hijau dengan bubuk matcha.",
    type: "ingredient",
    reactions: {
        "Cold": { result: "Matcha Ice Cream" }
    }
}

ingredients.chocolate_cream = {
    name: "Chocolate Cream",
    color: "#8b4513",
    category: "Dairy",
    description: "Cream cokelat manis.",
    type: "ingredient",
    reactions: {
        "Cold": { result: "Chocolate Ice Cream" }
    }
}

ingredients.strawberry_cream = {
    name: "Strawberry Cream",
    color: "#ff6f91",
    category: "Dairy",
    description: "Cream stroberi segar.",
    type: "ingredient",
    reactions: {
        "Cold": { result: "Strawberry Ice Cream" }
    }
}

ingredients.vanilla_icecream = {
    name: "Vanilla Ice Cream",
    color: "#fffaf0",
    category: "Dessert",
    description: "Es krim vanilla lembut.",
    type: "dish"
}

ingredients.matcha_icecream = {
    name: "Matcha Ice Cream",
    color: "#9acd32",
    category: "Dessert",
    description: "Es krim matcha segar dan creamy.",
    type: "dish"
}

ingredients.chocolate_icecream = {
    name: "Chocolate Ice Cream",
    color: "#5c3317",
    category: "Dessert",
    description: "Es krim cokelat kaya rasa.",
    type: "dish"
}

ingredients.strawberry_icecream = {
    name: "Strawberry Ice Cream",
    color: "#ffb6c1",
    category: "Dessert",
    description: "Es krim stroberi manis dan segar.",
    type: "dish"
}

ingredients.sprinkles = {
    name: "Sprinkles",
    color: "#ffcc00",
    category: "Topping",
    description: "Butiran warna-warni kecil untuk dessert.",
    type: "ingredient"
}

ingredients.caramel = {
    name: "Caramel Sauce",
    color: "#c68e17",
    category: "Topping",
    description: "Karamel manis kental.",
    type: "ingredient"
}

ingredients.oreo = {
    name: "Oreo Crumbs",
    color: "#3b3b3b",
    category: "Topping",
    description: "Remahan biskuit Oreo renyah.",
    type: "ingredient"
}

ingredients.cook = {
    name: "Cook",
    color: "#ff5733",
    category: "Utility",
    description: "Alat sekali pakai untuk memasak bahan (seperti Heat).",
    type: "tool",
    singleUse: true,
    onMix: function(target) {
        if(target.reactions && target.reactions["Heat"]) {
            var result = target.reactions["Heat"].result
            createIngredient(result)
        }
        deleteIngredient("Cook")
    }
}

ingredients.freeze = {
    name: "Freeze",
    color: "#33c1ff",
    category: "Utility",
    description: "Alat sekali pakai untuk membekukan bahan (seperti Cold).",
    type: "tool",
    singleUse: true,
    onMix: function(target) {
        if(target.reactions && target.reactions["Cold"]) {
            var result = target.reactions["Cold"].result
            createIngredient(result)
        }
        deleteIngredient("Freeze")
    }
}

