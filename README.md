# Estudos sobre Flexbox para o Processo Trainee

- Para começarmos a utilizar o flexbox, precisamos lembrar de colocar a nossa div principal como display: flex.

- Como padrão o flex alinha os nossos itens horizontalmente.

- Para trocar a direção do nosso flex podemos utilizar a propriedade css: flex-direction, que por padrão possui "row". Isso significa que vai tudo seguir na mesma linha horizontalmente.

- **column** = Coluna, ou seja, verticalmente.

- **row-reverse** = Mesma linha porém vai começar do lado direito da tela.

- **column-reverse** = Que é a mesma coisa porém verticalmente, vindo de baixo para cima.

# Alinhamento

## Duas propriedades importantes:

- **justify-content**: vai alinhar o conteúdo da nossa div no mesmo eixo do nosso flex-direction, ou seja, se for flex-direction: row vai alinhar horizontalmente, eixo x, e se for flex-direction: column vai alinhar verticalmente, eixo y.

- **align-items**: vai alinhar o conteúdo da nossa div sempre ao contrário do nosso flex-direction, ou seja, se tivermos o nosso flex-direction: row ele vai alinhar verticalmente, eixo y, e se for flex-drection: column ele vai alinhar horizontalmente, eixo x.

### Valor padrão dessa propriedades:

- **flex-start**: quer dizer que queremos alinhar nosso conteúdo no começo sempre.

- **center**: vai alinhar o nosso conteúdo ao centro. Se for no justify-content horizontalmente e no align-items verticalmente.
- **flex-end**: alinha os nossos items no final.

### O justify content possui algumas propriedades a mais:

- **space-between**: vai colocar um espaço igual entre todos os elementos da nossa div. Importante: não coloca um espaço no inicio nem no final.

- **space-around**: mesma coisa do space-between porém coloca um espaço no final e no inicio.

# Outras propriedades interessantes. Redimensionamento.

- **flex-grow**: O nosso elemento aceita ser aumentado para caber no container dele. Recebe 1 ou 0. Se setarmos como 1 ele aceita ser aumentado a medida que o nosso width/height for aumentando, valor padrão é 1. Se colocarmos 0 isso não acontece.

- **flex-shrink**: O nosso componente tem a capacidade de se espremer para caber no container. Recebe 1 ou 0. Se setarmos como 1 ele aceita ser espremido a medida que o nosso width/height for diminuindo, valor padrão também é 1. Se colocarmos 0 isso não acontece.

- **flex**: É a soma do flex-grow e o flex-shrink. Ou seja se quisermos que o flex-grow seja 1 e o flex-shrink seja 0 declaramos da seguinte forma no css: flex: 1 0. Onde o 1 corresponde ao flex-grow e o flex-shrink corresponde ao segundo parâmetro. Se colocarmos apenas flex: 1 ou flex: 0 estamos setando para os dois.

# Quebras de linha dentro do FlexBox

- **flex-wrap**: Isso faz com que o nossos elementos quebrem de linha caso não caiba no tamanho de tela atual. Recebe parâmetros como, **flex-wrap**: wrap, que faz com que os elementos quebrem de linha e o **flex-wrap: wrap-reverse** que faz com que os elementos se alinhem no final da tela.

- **align-content**: Alinhar os elementos quando eles estão em mais de uma linha. Possui as mesma propriedades do **justify-content**, ou seja, flex-start, flex-end, center, space-between e o space-around.

# Propriedades de ordem

- **order**: Podemos setar a ordem que nossos componentes seram exibidos em tela. Ex: order: 0(primeiro a ser exibido), order: 1(segundo a ser exibido) e etc.
