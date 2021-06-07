import { Button } from "@material-ui/core";
import PropTypes from 'prop-types';
function BrandButton({color, children}){
    return (
        <Button variant="contained" color={color}>{children}</Button>
    )
}
BrandButton.prototypes = {
    color:PropTypes.string,
}
export default BrandButton;