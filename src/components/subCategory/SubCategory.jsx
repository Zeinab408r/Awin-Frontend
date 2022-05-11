import ShowProduct from "./ShowProduct";

const SubCategory = () => {
  // const [filtered, setFiltered] = useState([]);
  // const [category, setCategory] = useState(0);
  // const [result, setResult] = useState([]);
  // const [womenProduct, setWomenProduct] = useState([]);
  // const [ovenProduct, setOvenProduct] = useState([]);
  // const url =
  //   'https://project1.safe-stream.com/api/product/?offset=200';
  // const url2 =
  //   ' https://project1.safe-stream.com/api/product/?offset=2200';
  // // let endpoints = [
  // //   'https://project1.safe-stream.com/api/product/?offset=200',
  // //   ' https://project1.safe-stream.com/api/product/?offset=2200',
  // // ];

  // useEffect(() => {
  //   //getAllProduct();
  //   getOvenProduct();
  //   setWomenProduct();
    
  // }, []);

  // // const getAllProduct = async () => {
  // //   axios
  // //     .all(endpoints.map((endpoint) => axios.get(endpoint)))
  // //     .then((response) => {
  // //       console.log(response);
  // //       // setResult(response.data.results);
  // //       // setFiltered(response.data.results);
  // //     });
  // // };
  // const getOvenProduct = async () => {
  //   await axios
  //     .get(url)
  //     .then((response) => {
  //       console.log(response);

  //       setOvenProduct(response.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // const getWomanProduct = async () => {
  //   await axios
  //     .get(url2)
  //     .then((response) => {
  //       console.log(response);

  //       setWomenProduct(response.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <ShowProduct/>
    </>
  );
};

export default SubCategory;
