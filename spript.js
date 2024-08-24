spript.js


body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: #fff;
    padding: 15px;
    text-align: center;
}

header h1 {
    margin: 0;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 10px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

section {
    padding: 20px;
}

.product-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.product {
    background-color: #fff;
    padding: 15px;
    margin: 10px;
    border: 1px solid #ddd;
    text-align: center;
    width: 200px;
}

.product img {
    max-width: 100%;
    height: auto;
}

.product h3 {
    margin: 10px 0;
}

.buy-link {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
}

.buy-link:hover {
    background-color: #0056b3;
}

footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
}
