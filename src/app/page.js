import Image from "next/image";
import DynamicTable from "./components/DynamicTable";
export default function Home() {

  const data = [
    { name: 'John Doe', age: 30, city: 'New York' },
    { name: 'Jane Doe', age: 25, city: 'Los Angeles' },
    { name: 'Peter Jones', age: 40, city: 'Chicago' },
  ];

  const cars = [
    {
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      color: 'Silver',
      price: 25000,
    },
    {
      make: 'Honda',
      model: 'Civic',
      year: 2023,
      color: 'Black',
      price: 22000,
    },
    {
      make: 'Ford',
      model: 'Mustang',
      year: 2021,
      color: 'Red',
      price: 35000,
    },
    {
      make: 'Chevrolet',
      model: 'Corvette',
      year: 2020,
      color: 'Yellow',
      price: 60000,
    },
    {
      make: 'Tesla',
      model: 'Model 3',
      year: 2024,
      color: 'White',
      price: 45000,
    },
  ];

  const clothes = [
    {
      type: 'Shirt',
      brand: 'Nike',
      size: 'Medium',
      color: 'Blue',
      price: 30,
    },
    {
      type: 'Pants',
      brand: 'Levi\'s',
      size: '32',
      color: 'Khaki',
      price: 50,
    },
    {
      type: 'Dress',
      brand: 'Zara',
      size: 'Small',
      color: 'Red',
      price: 75,
    },
    {
      type: 'Jacket',
      brand: 'North Face',
      size: 'Large',
      color: 'Black',
      price: 150,
    },
    {
      type: 'Shoes',
      brand: 'Adidas',
      size: '9',
      color: 'White',
      price: 100,
    },
  ];

  const electronicDevices = [
    {
      type: 'Laptop',
      brand: 'Apple',
      model: 'MacBook Pro',
      screenSize: '13 inches',
      price: 1200,
    },
    {
      type: 'Smartphone',
      brand: 'Samsung',
      model: 'Galaxy S22',
      storage: '256GB',
      price: 800,
    },
    {
      type: 'TV',
      brand: 'LG',
      size: '55 inches',
      resolution: '4K',
      price: 1000,
    },
    {
      type: 'Smartwatch',
      brand: 'Fitbit',
      model: 'Sense',
      features: 'Heart rate monitoring, SpO2 tracking, GPS',
      price: 300,
    },
    {
      type: 'Wireless Earbuds',
      brand: 'Sony',
      model: 'WF-1000XM4',
      features: 'Active noise cancellation, long battery life',
      price: 250,
    },
  ];

  
  return (
    <>
      <DynamicTable data={electronicDevices} />
    </>
  );
}
