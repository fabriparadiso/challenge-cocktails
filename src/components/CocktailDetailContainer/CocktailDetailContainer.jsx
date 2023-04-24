import React, { useState, useEffect } from 'react';
import { getDetail } from '../../api/rest';
import { Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import { getIngredients } from '../../utils/helpers';
import { CocktailDetail } from './CocktailDetail';

export const CocktailDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState([])
  const [ingredients, setIngredients] = useState([])
  const { id } = useParams ()
  useEffect(() => {
    const getDetailCocktail = async(id) => {
      const response = await getDetail(id);
      return response
    }
    getDetailCocktail(id)
    .then(response => {
      setItem(response)
      setIngredients(getIngredients(response))
      }
    )
    .finally(() => setLoading(false))
  }, [id])

  return (
    <>
      {
        loading?
          <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'></Spinner>
          :
          <CocktailDetail item={item} ingredients={ingredients}></CocktailDetail>
      }
    </>
  )
}
