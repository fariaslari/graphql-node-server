export class Item {
    private id: Number = 0;
    private name: String = '';
    private imagePath: String = '';
    private price: Number = 0;
    private initialQty: Number = 0;
  
    constructor(params: any) {
        let {id, name, imagePath, price, initialQty} = params
        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
        this.price = price;
        this.initialQty = initialQty;
    }

  }