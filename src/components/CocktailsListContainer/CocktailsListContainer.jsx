import { Box, Grid, GridItem } from "@chakra-ui/react"
import { CocktailContextProvider, useCocktailContext } from "../../context/CocktailsContext"
import { CocktailItem } from "./CocktailItem"

export const CocktailsListContainer = ()  =>{
    const {cocktails} = useCocktailContext(CocktailContextProvider)
    return(
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {
            cocktails.map( (item) => (
                <Box key={item.idDrink}>
                    <GridItem>
                        <CocktailItem item={item} />
                    </GridItem>
                </Box>
                ))
            }
        </Grid>
        )
}
