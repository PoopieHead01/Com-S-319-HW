class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleSort = this.handleSort.bind(this);
        this.incrementStock = this.incrementStock.bind(this);
        this.state = {
            cars: [
                {
                    "manufacturer": "Toyota",
                    "model": "Rav4",
                    "year": 2008,
                    "stock": 3,
                    "price": 8500
                },

                {
                    "manufacturer": "Toyota",
                    "model": "Camry",
                    "year": 2009,
                    "stock": 2,
                    "price": 6500
                },

                {
                    "manufacturer": "Toyota",
                    "model": "Tacoma",
                    "year": 2016,
                    "stock": 1,
                    "price": 22000
                },

                {
                    "manufacturer": "BMW",
                    "model": "i3",
                    "year": 2012,
                    "stock": 5,
                    "price": 12000
                },

                {
                    "manufacturer": "Chevy",
                    "model": "Malibu",
                    "year": 2015,
                    "stock": 2,
                    "price": 10000
                },

                {
                    "manufacturer": "Honda",
                    "model": "Accord",
                    "year": 2013,
                    "stock": 1,
                    "price": 9000
                },

                {
                    "manufacturer": "Hyundai",
                    "model": "Elantra",
                    "year": 2013,
                    "stock": 2,
                    "price": 7000
                },

                {
                    "manufacturer": "Chevy",
                    "model": "Cruze",
                    "year": 2012,
                    "stock": 2,
                    "price": 5500
                },

                {
                    "manufacturer": "Dodge",
                    "model": "Charger",
                    "year": 2013,
                    "stock": 2,
                    "price": 16000
                },

                {
                    "manufacturer": "Ford",
                    "model": "Mustang",
                    "year": 2009,
                    "stock": 1,
                    "price": 8000
                },

            ],
            isOldestFirst: true
        };
    }
    renderTableData() {
      return this.state.cars.map((car, index) => {
         const { manufacturer, model, year, stock, price } = car //destructuring
         return (
            <tr key={model}>
               <td>{manufacturer}</td>
               <td>{model}</td>
               <td>{year}</td>
               <td>{stock}</td>
               <td>${price}.00</td>
               <button onClick = {this.incrementStock} data-key = {index}>Increment</button>
            </tr>
         )
      })
   }

   renderTableHeader() {
      let header = Object.keys(this.state.cars[0])
      return header.map((key, index) => {
         return (
           (key == 'year' && <th onClick = {this.handleSort} key = {index}>{key.toUpperCase()}</th>)
           ||<th key={index}>{key.toUpperCase()}</th>
         )
      })
   }

   incrementStock(event){
     var index = event.target.getAttribute('data-key');
     //alert(this.state.cars[index].stock);
     const{cars} = this.state
     let carStock = cars
     carStock[index].stock += 1
     this.setState({
      cars: carStock
     })
   }

   handleSort(event){
     const {cars} = this.state
     let newCars = cars
     if (this.state.isOldestFirst) {
       newCars = cars.sort((a, b) => a.year - b.year)
     } else {
       newCars = cars.sort((a, b) => b.year - a.year)
     }
     this.setState({
       isOldestFirst: !this.state.isOldestFirst,
       cars: newCars
     })
   }

    render() {
        return (
          <div>
          <table id='cars'>
             <tbody>
                <tr>
                  {this.renderTableHeader()}
                  <th>OPTION</th>
                </tr>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById("app"));
