import { useEffect, useState } from "react";
import categoryData from 'api/categories.json'
import Category from 'components/ui/Category'
import Title from "components/ui/Title";

export default function Categories() {

  const [ categories, setCategories] = useState([]);

  useEffect(() => {
      setCategories(categoryData)
  }, [])

  return (
    <div className="bg-white py-4 mb-10">
        <div className="container mx-auto">
          <Title>Kategoriler</Title>
            <div className=" grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10">
              {!categories.length && 'Yükleniyor...'}
              {categories && categories.map((category,index) => <Category key={index} category={category} />)}
            </div>
        </div>
    </div>
  )
}
