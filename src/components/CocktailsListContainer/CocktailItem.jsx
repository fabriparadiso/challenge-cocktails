import React, { useState, useEffect } from 'react';
import { getIngredients } from '../../utils/helpers';
import { Card, CardBody, CardFooter, Text, Heading, Image, Button, Center, Box, VStack } from '@chakra-ui/react'
import { getDetail } from '../../api/rest';
import { Link } from 'react-router-dom';

export const CocktailItem = ({item}) => {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    const getDetailCocktail = async(id) => {
      const response = await getDetail(id);
      return response
    }
    getDetailCocktail(item.idDrink)
    .then(response => {
      setIngredients(getIngredients(response))
      }
    )
  }, [item]);

  return (
    <>
      <VStack>
        <Card maxW='sm' marginTop={"1rem"}>
          <Box>
            <Center>
              <Heading fontSize={"1.2rem"}>{`ID #${item.idDrink}`}</Heading>
            </Center>
          </Box>
          <Box>
            <CardBody>
              <Image
                w="10rem"
                src={item.strDrinkThumb}
                alt={item.strDrink}
                borderRadius='lg'
              />
                <Center>
                  <Text paddingTop={"1rem"} fontWeight={"semibold"}> Ingredients </Text>
                </Center>
                <Text paddingTop={"1rem"}>
                  {ingredients.slice(0, 2).map(item=>(<Text>{item}</Text>))}
                </Text>
                <Text>
                  {ingredients.length>2? "and more ingredients" : null}
                </Text>
            </CardBody>
          </Box>
          <CardFooter>
            <Link to ={`${item.idDrink}`} style={{textDecoration:'inherit', color:'inherit'}}>
              <Button variant='solid' colorScheme='blue'>
                See more details
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </VStack>
    </>
  )
}
