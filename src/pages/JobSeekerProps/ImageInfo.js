import React, { useState } from 'react'
import { Button, Container, Form, Image } from 'semantic-ui-react'

export default function ImageInfo() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);

        // Dosya önizlemesini oluştur
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = () => {
        console.log('Selected file:', selectedFile);
    };


    return (
        <Container>
            <Form>
                <Form.Field>
                    <label>Choose a File</label>
                    <input type="file" onChange={handleFileChange} />
                </Form.Field>
                {previewUrl && (
                    <Form.Field>
                        <Image src={previewUrl} size="small" rounded centered />
                    </Form.Field>
                )}
                <Button inverted color="red" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
