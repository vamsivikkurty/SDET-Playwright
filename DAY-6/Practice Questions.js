//Question-1
const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid",
  "Dubai-Mumbai:450",
  "Berlin-Rome:95"
];

const arr = rawFlights.map((flight) => {
  const [route, raw_price] = flight.split(":");
  const [from, to] = route.split("-");
  let price = Number(raw_price);

  if (isNaN(price)) {
    price = 0;
  }

  return {
    from,
    to,
    price
  };
});

const filtered_flights = arr.filter(
  (flight) => flight.price >= 100 && flight.price <= 500
);

filtered_flights.sort((a, b) => a.price - b.price);

const final_res = JSON.stringify(filtered_flights);

console.log(final_res);



//Question-2

const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" }
];

const isEligible = (product) => {
  return (
    product.category === "Electronics" &&
    product.price > 200
  );
};

async function applyPromo(cart) {
  let totalSavings = 0;
  let discountedItems = 0;

  const updatedCart = cart.map((product) => {
    if (isEligible(product)) {
      let discount = product.price * 0.10;

      totalSavings += discount;
      discountedItems++;

      return {
        name: product.name,
        price: product.price - discount,
        category: product.category,
        isDiscounted: true
      };
    }

    return {
      name: product.name,
      price: product.price,
      category: product.category,
      isDiscounted: false
    };
  });

  console.log(
    `Promotion applied! ${discountedItems} items were discounted for a total saving of ${totalSavings}.`
  );

  setTimeout(() => {
    console.log(updatedCart);
  }, 1000);
}

applyPromo(cart);




//Question-3

const rawMovies = [
  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000",
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500"
];

const movies = rawMovies
  .map((item) => {
    const [name, genre, views] = item.split("|");

    let n_views = Number(views);

    if (isNaN(n_views)) {
      n_views = 0;
    }

    return {
      name,
      genre,
      n_views
    };
  })
  .filter((movie) => {
    return (
      (movie.genre === "Action" ||
        movie.genre === "Sci-Fi") &&
      movie.n_views > 5000
    );
  })
  .sort((a, b) => b.n_views - a.n_views);

const final_movies = JSON.stringify(movies);

console.log(final_movies);



// Question-4


const employees = [
  { id: 101, name: "Alice", salary: 6000 },
  { id: 102, name: "Bob", salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 }
];

function taxLogic(salary) {
  if (salary > 5000) {
    return salary * 0.20;
  }

  return salary * 0.10;
}

function calculatePayroll(employees, taxCallback) {
  const processedEmployees = employees.map((employee) => {
    const tax = taxCallback(employee.salary);

    const netSalary = employee.salary - tax;

    const status =
      netSalary > 4000
        ? "Premium"
        : "Standard";

    return {
      ...employee,
      tax,
      netSalary,
      status
    };
  });

  const totalNetPayout = processedEmployees.reduce(
    (total, employee) => total + employee.netSalary,
    0
  );

  console.log(
    `Payroll Processed: Total Net Payout is $${totalNetPayout} for ${employees.length} employees.`
  );

  setTimeout(() => {
    console.log(processedEmployees);
  }, 2000);
}

calculatePayroll(employees, taxLogic);