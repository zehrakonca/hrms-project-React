import React, { useEffect, useState } from 'react'
import { Container, Segment } from 'semantic-ui-react'

export default function Image() {

    // const [images, setImages] = useState([])
    // const [imageURLs, setImageURLs] = useState([])

    // useEffect(()=>{
    //     if(images.length<1) return;
    //     const newImageURLs =[]
    //     images.forEach(image=>newImageURLs.push(URL.createObjectURL(image)));
    //     setImageURLs(newImageURLs);

    // }, [images])

    // function onImageChange(e) {
    //     setImages([...e.target.files]);
    // }

    // return (
    //     <Container style={{ margin: "1em" }}>
    //         <Segment>
    //             <input type="file" multiple accept="image/*" onChange={onImageChange} />
    //             {imageURLs.map(imageSrc => <img src={Image}/>)}
    //         </Segment>
    //     </Container>
    // )
}
