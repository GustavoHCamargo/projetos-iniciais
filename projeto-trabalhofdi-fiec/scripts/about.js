const eqp= document.getElementById('eqp')
const hard= document.getElementById('hard')
const soft= document.getElementById('soft')
const rede= document.getElementById('rede')
const mkt= document.getElementById('mkt')

const tit= document.getElementById('titS')
const par= document.getElementById('parS')
const img= document.getElementById('imagemS')

function mudarAbout(tipo) {
    if (tipo== 'eqp') {
        tit.innerHTML= "CONHEÇA NOSSA EQUIPE!"
        par.innerHTML= "A Brawl Tech é sua parceira de confiança em soluções tecnológicas desde 2024.<br><br> Com uma paixão por inovação e excelência, oferecemos um portfólio abrangente de serviços relacionados à software, hardware e redes.<br><br> Nossa missão é capacitar nossos clientes a alcançar o sucesso através de soluções personalizadas que impulsionam o desempenho e a eficiência.<br><br> Alie-se a nós na jornada para transformar o futuro da tecnologia!"
        img.src= "../img/equipe.png"
    }
    if (tipo== 'hard') {
        tit.innerHTML= "VINICIUS NAKADA MACEDO"
        par.innerHTML= "Conheça nosso especialista em hardware, um profissional dedicado que está na vanguarda da inovação tecnológica.<br><br> Com vasta experiência e conhecimento técnico, ele é responsável por desenvolver e otimizar soluções de hardware que são o coração de nossos sistemas integrados.<br><br> Comprometido com a excelência, nosso especialista garante que cada componente atenda aos mais altos padrões de qualidade e desempenho, possibilitando que nossos clientes superem os desafios tecnológicos de hoje e de amanhã."
        img.src= "../img/vinicius.png"
    }
    if (tipo== 'soft') {
        tit.innerHTML= "LUCAS KENZO KOBAYASHI"
        par.innerHTML= "Apresentamos nosso talentoso profissional de software, cuja criatividade e habilidade técnica impulsionam o desenvolvimento de soluções inovadoras.<br><br> Ele combina uma compreensão profunda das necessidades do cliente com uma abordagem ágil e adaptativa para criar ou adequar aplicativos e sistemas que não apenas atendem, mas superam as expectativas.<br><br> Seu compromisso com a codificação de qualidade e a melhoria contínua é fundamental para entregar produtos que definem o padrão em usabilidade, confiabilidade e eficiência."
        img.src= "../img/lucas.png"
    }
    if (tipo== 'rede') {
        tit.innerHTML= "ARTHUR SANTOS"
        par.innerHTML= "Apresentamos o nosso especialista em redes, um estrategista de conectividade e segurança que garante que nossas soluções de rede sejam robustas e confiáveis.<br><br> Com um olhar atento para a arquitetura de rede e uma compreensão profunda dos protocolos de comunicação, ele projeta e mantém infraestruturas que suportam o fluxo contínuo de informações.<br><br> Sua dedicação à inovação e à segurança cibernética é essencial para fornecer aos nossos clientes uma rede que não apenas conecta, mas também protege seus valiosos dados."
        img.src= "../img/arthur.png"
    }
    if (tipo== 'mkt') {
        tit.innerHTML= "GUSTAVO HENRIQUE DE CAMARGO"
        par.innerHTML= "Conheça nosso dinâmico profissional de marketing e administração, o cérebro por trás de nossas estratégias de mercado e operações diárias.<br><br> Com uma visão inovadora e habilidades organizacionais excepcionais, ele lidera com sucesso campanhas que ampliam nossa presença no mercado e fortalecem nossa marca.<br><br> Sua capacidade de analisar tendências e adaptar-se rapidamente às mudanças do mercado é vital para o crescimento contínuo da empresa, garantindo que permaneçamos à frente em um setor em constante evolução."
        img.src= "../img/gustavo.png"
    }
}