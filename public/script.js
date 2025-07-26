
var productList = [];

function LoadData(callback){ 
    productList =[
    {name:"product 1",price:"$10",desc:"none"},
    {name:"product 2",price:"$20",desc:"some"},
    {name:"product 3",price:"$30",desc:"eun"},
    ]
    callback();
}
function renderProducts (){

    document.getElementById("data").innerHTML=` <table>
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>description</th>
                </tr>
            </thead>
            <tbody>
            ${productList.map((product,index)=>{
                return  `
                <tr>
                    <td>${index + 1}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.desc}</td>

                </tr>
                `
            })}
            </tbody>
 
        </table>`
    }

// template literal `` used basically for multiline Strings , initially made for defining template
//loadData()

// hoisting is moving variable dec;arion to the top of its function scope
 LoadData( renderProducts); 