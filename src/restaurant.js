function addOrder(item) {
  this.consumption.push(item);
}

const createMenu = (object) => ({
  fetchMenu: () => object,
  consumption: [],
  order: addOrder,
  pay() {
    let valueOrder = 0;
    const menu = this.fetchMenu();
    const consumo = this.consumption;
    
    Object.keys(menu).forEach((categoria) => {
      consumo.forEach((item) => {
        valueOrder += menu[categoria][item] !== undefined ? menu[categoria][item] : 0;
      });
    });

    return Number((valueOrder * 1.10).toFixed(2));
  },
});

module.exports = createMenu;
