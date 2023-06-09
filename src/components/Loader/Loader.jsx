import { ColorRing } from 'react-loader-spinner';
import { Container } from 'components/App.styled';

 const Loader = () => {
    return <Container>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        margin="0 auto"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
      />
    </Container>
 }

export default Loader;
