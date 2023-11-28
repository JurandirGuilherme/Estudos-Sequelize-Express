
interface FiguraPlana {
    double calcularArea();
}


abstract class FiguraBase implements FiguraPlana {
    protected String nome;

    public FiguraBase(String nome) {
        this.nome = nome;
    }


    public String getNome() {
        return nome;
    }


    public abstract double calcularPerimetro();
}

class Quadrado extends FiguraBase {
    private double lado;

    public Quadrado(String nome, double lado) {
        super(nome);
        this.lado = lado;
    }


    @Override
    public double calcularArea() {
        return lado * lado;
    }


    @Override
    public double calcularPerimetro() {
        return 4 * lado;
    }
}


class Triangulo extends FiguraBase {
    private double base;
    private double altura;

    Triangulo(String nome, double base, double altura) {
        super(nome);
        this.base = base;
        this.altura = altura;
    }

    @Override
    public double calcularArea() {
        return (base * altura) / 2;
    }


    @Override
    public double calcularPerimetro() {
   
        return 3 * base;
    }
}


class Circulo implements FiguraPlana {
    private double raio;


    public Circulo(double raio) {
        this.raio = raio;
    }

    @Override
    public double calcularArea() {
        return Math.PI * raio * raio;
    }
}

class ExemploFiguras {
    public static void main(String[] args) {
        Quadrado quadrado = new Quadrado("Quadrado", 5);
        Triangulo triangulo = new Triangulo("Triângulo", 3, 4);
        Circulo circulo = new Circulo(2);

        System.out.println(quadrado.getNome() + ": Área = " + quadrado.calcularArea() + ", Perímetro = " + quadrado.calcularPerimetro());
        System.out.println(triangulo.getNome() + ": Área = " + triangulo.calcularArea() + ", Perímetro = " + triangulo.calcularPerimetro());
        System.out.println("Círculo: Área = " + circulo.calcularArea());
    }
}