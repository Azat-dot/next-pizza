'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from '../ui/button';
import { Title } from './title';
interface Props {
  imageUrl: string;
  name: string;
  price: number;
  className?: string;
  onSubmit?: VoidFunction;
}

export const ChooseProductForm: React.FC<Props> = ({
  name,
  price,
  imageUrl,
  onSubmit,
  className,
}) => {

 

  // if (!productItem) {
  //   throw new Error('Продукт не найден');
  // }

  // const productPrice = productItem.price;
  //   console.log(productPrice)


  // const handleClickAdd = async () => {
  //   try {
  //     await addCartItem({
  //       productItemId: productItem.id,
  //       quantity: 1,
  //     });
  //     toast.success('Товар добавлен в корзину');
  //   } catch (error) {
  //     console.error(error);
  //     toast.error('Произошла ошибка при добавлении в корзину');
  //   }

  //   onClickAdd?.();
  // };

  return (
    <div className={cn(className, 'flex flex-1')}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[300px] h-[300px]"
        />
      </div>

      <div className="w-[490px] bg-[#FCFCFC] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <Button
          // loading={loading}
          onClick={onSubmit}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-5">
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};
