import React from 'react';
import { Text, Image, Center, Box } from '@chakra-ui/react';

export const CocktailDetail = ({item, ingredients}) => {
  return (
    <Center>

      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        marginTop={"2rem"}
      >
        <Image src={item.strDrinkThumb} alt={item.strDrink} />
        <Center>
          <Text
            mt="1"
            fontSize={"2rem"}
            fontWeight="semibold"
            lineHeight="tight"
            isTruncated
            color="gray.700"
          >
            {item.strDrink}
          </Text>
        </Center>

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Text fontSize="sm" fontWeight="bold" color="gray.500" mr="2">
              {ingredients.map(item=>(<Text>{item}</Text>))}
            </Text>
            <Text fontSize="sm" color="gray.500">
              How to prepare
            </Text>
            <Text fontSize="sm" color="gray.500">
            {item.strInstructions}
            </Text>
          </Box>
        </Box>
      </Box>
    </Center>
  )
}
