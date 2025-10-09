//crie um componente "Productcard" que recebeu via props: {'name'(nome do produto), 'price'(preço),'image'(url da imagem)} e use dentro de um 'productList' para renderizar vários produtos


function ProductCard ({name,price,image}){
    return(
        <>
        <h2>{name}</h2>
        <p>R$ {price}</p>
        <img src={image} alt={name}/>
        </>
    );
}

export default ProductCard;