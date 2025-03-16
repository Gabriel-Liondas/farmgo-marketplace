import MarketCard from '../../components/MarketCard/MarketCard';

function MockProducts() {
    return [  new MarketCard("Fazenda Avelã", "Frutas", "Bahia", "https://agfeed.com.br/wp-content/uploads/2023/12/fazenda-porteira.jpg"),
        new MarketCard("Canteiro de Frutas", "Frutas", "Santa Catarina", "https://blog4.mfrural.com.br/wp-content/uploads/2020/02/fazendas.jpg"),
        new MarketCard("Fazenda São Jorge", "Frutas", "Minas Gerais", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uHVmVE1NlwR79f6T-EFher1Bti4t_HVBRw&s"),
        new MarketCard("Caverna das Uvas", "Frutas", "Rio Grande do Sul", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447802176.jpg?k=f0b6fb5091a4086673b7f60bb6b847c558c857f6628cc0167bb37f4679ba3fbd&o=&hp=1"),
        
        new MarketCard("Granja Boa Vista", "Produtos Animais", "Paraná", "https://blog.7mboots.com.br/wp-content/uploads/2025/01/blog-4563.jpg"),
        new MarketCard("Sítio Tradição", "Produtos Animais", "São Paulo", "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/10/hotel-fazenda-perto-sao-paulo-sp-capa.jpg"),
        new MarketCard("Fazenda Beira-Mar", "Produtos Animais", "Rio de Janeiro", "https://png.pngtree.com/thumb_back/fw800/background/20220926/pngtree-free-range-pig-farming-pig-farm-animals-grain-photo-image_33960204.jpg"),
        new MarketCard("Estância do Sol", "Produtos Animais", "Goiás", "https://img.freepik.com/fotos-gratis/bela-foto-de-galinhas-na-grama-da-fazenda-em-um-dia-ensolarado_181624-11060.jpg"),
        
        new MarketCard("Horta do Vale", "Verduras", "Pernambuco", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo65llie32uDYgttky7z2eYhRox9LohgPVaA&s"),
        new MarketCard("Chácara Verde", "Verduras", "Espírito Santo", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7Fw0GiL3JW_OZr6LPs_V_tGwJwYxb9_FGg&s"),
        new MarketCard("Fazenda Exótica", "Verduras", "Mato Grosso", "https://d2yghbees9788u.cloudfront.net/agrishow/2024/09/fazendas-verticais.jpg"),
        new MarketCard("Sítio Mangueira", "Verduras", "Pará", "https://ciclovivo.com.br/wp-content/uploads/2019/11/mercedes-benz-inaugura-primeira-fazenda-urbana-dentro-de-uma-fabrica-begreen-ciclovivo-divulgacao.jpg"),
      
        new MarketCard("Fazenda Verde", "Frutas", "Bahia", "https://agfeed.com.br/wp-content/uploads/2023/12/fazenda-porteira.jpg"),
        new MarketCard("Laranja do Sul", "Frutas", "Santa Catarina", "https://blog4.mfrural.com.br/wp-content/uploads/2020/02/fazendas.jpg"),
        new MarketCard("Vinícola São Pedro", "Frutas", "Minas Gerais", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uHVmVE1NlwR79f6T-EFher1Bti4t_HVBRw&s"),
        new MarketCard("Fazenda São Paulo", "Frutas", "Rio Grande do Sul", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447802176.jpg?k=f0b6fb5091a4086673b7f60bb6b847c558c857f6628cc0167bb37f4679ba3fbd&o=&hp=1"),
      
        new MarketCard("Granja Boa Vista", "Produtos Animais", "Rio de Janeiro", "https://blog.7mboots.com.br/wp-content/uploads/2025/01/blog-4563.jpg"),
        new MarketCard("Sítio Tradição", "Produtos Animais", "São Paulo", "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/10/hotel-fazenda-perto-sao-paulo-sp-capa.jpg"),
        new MarketCard("Estância do Sol", "Produtos Animais", "Goiás", "https://img.freepik.com/fotos-gratis/bela-foto-de-galinhas-na-grama-da-fazenda-em-um-dia-ensolarado_181624-11060.jpg"),
        new MarketCard("Fazenda Beira-Mar", "Produtos Animais", "Paraná", "https://png.pngtree.com/thumb_back/fw800/background/20220926/pngtree-free-range-pig-farming-pig-farm-animals-grain-photo-image_33960204.jpg"),
        
        new MarketCard("Horta do Vale", "Verduras", "Bahia", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo65llie32uDYgttky7z2eYhRox9LohgPVaA&s"),
        new MarketCard("Chácara Verde", "Verduras", "Pernambuco", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7Fw0GiL3JW_OZr6LPs_V_tGwJwYxb9_FGg&s"),
        new MarketCard("Sítio Mangueira", "Verduras", "Minas Gerais", "https://d2yghbees9788u.cloudfront.net/agrishow/2024/09/fazendas-verticais.jpg"),
        new MarketCard("Fazenda Exótica", "Verduras", "São Paulo", "https://ciclovivo.com.br/wp-content/uploads/2019/11/mercedes-benz-inaugura-primeira-fazenda-urbana-dentro-de-uma-fabrica-begreen-ciclovivo-divulgacao.jpg"),
      
        new MarketCard("Fazenda Verde", "Frutas", "Mato Grosso", "https://agfeed.com.br/wp-content/uploads/2023/12/fazenda-porteira.jpg"),
        new MarketCard("Vinícola São Pedro", "Frutas", "Goiás", "https://blog4.mfrural.com.br/wp-content/uploads/2020/02/fazendas.jpg"),
        new MarketCard("Fazenda São Jorge", "Frutas", "Rio Grande do Sul", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uHVmVE1NlwR79f6T-EFher1Bti4t_HVBRw&s"),
        new MarketCard("Canteiro de Frutas", "Frutas", "Santa Catarina", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447802176.jpg?k=f0b6fb5091a4086673b7f60bb6b847c558c857f6628cc0167bb37f4679ba3fbd&o=&hp=1"),
      
        new MarketCard("Fazenda Boa Vista", "Produtos Animais", "Paraná", "https://blog.7mboots.com.br/wp-content/uploads/2025/01/blog-4563.jpg"),
        new MarketCard("Estância do Sol", "Produtos Animais", "Minas Gerais", "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/10/hotel-fazenda-perto-sao-paulo-sp-capa.jpg"),
        new MarketCard("Granja Boa Vista", "Produtos Animais", "São Paulo", "https://img.freepik.com/fotos-gratis/bela-foto-de-galinhas-na-grama-da-fazenda-em-um-dia-ensolarado_181624-11060.jpg"),
        new MarketCard("Fazenda Beira-Mar", "Produtos Animais", "Rio de Janeiro", "https://png.pngtree.com/thumb_back/fw800/background/20220926/pngtree-free-range-pig-farming-pig-farm-animals-grain-photo-image_33960204.jpg"),
      
        new MarketCard("Chácara Verde", "Verduras", "Pará", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo65llie32uDYgttky7z2eYhRox9LohgPVaA&s"),
        new MarketCard("Fazenda Exótica", "Verduras", "Espírito Santo", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7Fw0GiL3JW_OZr6LPs_V_tGwJwYxb9_FGg&s"),
        new MarketCard("Sítio Mangueira", "Verduras", "São Paulo", "https://d2yghbees9788u.cloudfront.net/agrishow/2024/09/fazendas-verticais.jpg"),
        new MarketCard("Horta do Vale", "Verduras", "Pará", "https://ciclovivo.com.br/wp-content/uploads/2019/11/mercedes-benz-inaugura-primeira-fazenda-urbana-dentro-de-uma-fabrica-begreen-ciclovivo-divulgacao.jpg"),
      
        new MarketCard("Fazenda São Jorge", "Frutas", "Minas Gerais", "https://agfeed.com.br/wp-content/uploads/2023/12/fazenda-porteira.jpg"),
        new MarketCard("Caverna das Uvas", "Frutas", "Pará", "https://blog4.mfrural.com.br/wp-content/uploads/2020/02/fazendas.jpg"),
        new MarketCard("Vinícola São Pedro", "Frutas", "Goiás", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uHVmVE1NlwR79f6T-EFher1Bti4t_HVBRw&s"),
        new MarketCard("Canteiro de Frutas", "Frutas", "Rio Grande do Sul", "https://cf.bstatic.com/xdata/images/hotel/max1024x768/447802176.jpg?k=f0b6fb5091a4086673b7f60bb6b847c558c857f6628cc0167bb37f4679ba3fbd&o=&hp=1"),
      
        new MarketCard("Sítio Tradição", "Produtos Animais", "Santa Catarina", "https://blog.7mboots.com.br/wp-content/uploads/2025/01/blog-4563.jpg"),
        new MarketCard("Estância do Sol", "Produtos Animais", "Pará", "https://www.melhoresdestinos.com.br/wp-content/uploads/2021/10/hotel-fazenda-perto-sao-paulo-sp-capa.jpg"),
        new MarketCard("Fazenda Beira-Mar", "Produtos Animais", "Minas Gerais", "https://img.freepik.com/fotos-gratis/bela-foto-de-galinhas-na-grama-da-fazenda-em-um-dia-ensolarado_181624-11060.jpg"),
        new MarketCard("Granja Boa Vista", "Produtos Animais", "Goiás", "https://png.pngtree.com/thumb_back/fw800/background/20220926/pngtree-free-range-pig-farming-pig-farm-animals-grain-photo-image_33960204.jpg"),
      
        new MarketCard("Chácara Verde", "Verduras", "Rio de Janeiro", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo65llie32uDYgttky7z2eYhRox9LohgPVaA&s"),
        new MarketCard("Fazenda Exótica", "Verduras", "Bahia", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7Fw0GiL3JW_OZr6LPs_V_tGwJwYxb9_FGg&s"),
        new MarketCard("Sítio Mangueira", "Verduras", "São Paulo", "https://d2yghbees9788u.cloudfront.net/agrishow/2024/09/fazendas-verticais.jpg"),
        new MarketCard("Horta do Vale", "Verduras", "Pará", "https://ciclovivo.com.br/wp-content/uploads/2019/11/mercedes-benz-inaugura-primeira-fazenda-urbana-dentro-de-uma-fabrica-begreen-ciclovivo-divulgacao.jpg")
      ];
}

export default MockProducts;