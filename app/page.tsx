import { Container, Filters, ProductCard, ProductsGroupList, Title, TopBar } from "@/components/shared";

export default function Home() {
    return <>
    <Container className="mt-10">
        <Title text='Все пиццы' size="lg" className="font-extrabold"/>
    </Container>

    <TopBar />

    <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
            <div className='w-[250px]'>
                <Filters />
            </div>

            <div className="flex-1">
                <div className="flex flex-col gap-16">
                   <ProductsGroupList title={"Пиццы"} items={[
                    {
                        id: 1,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 2,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 3,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 4,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 5,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 6,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 7,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 8,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 9,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },
                   ]} categoryId={1} />

                   <ProductsGroupList title={"Комбо"} items={[
                    {
                        id: 1,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 2,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 3,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 4,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 5,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 6,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 7,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 8,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },{
                        id: 9,
                        name: "Пепперони",
                        imageUrl: "https://media.dodostatic.net/image/r:584x584/0198bf39dda97082912be8d1f3f2b233.avif",
                        price: 359,
                        items: [{ price: 359}],
                   },
                   ]} categoryId={2} />
                </div>
            </div>

        </div>


    </Container>

</>

}