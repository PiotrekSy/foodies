'use client'
import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';

const ImagePicker = ({ label, name }) => {
    const pickerRef = useRef();
    const [pickedImage, setPickedImage] = useState();

    const clickHandle = () => {
        pickerRef.current.click();
    }
    const pickHandle = (event) => {
        const file = event.target.files[0];
        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);
    }

    return <div className={styles.picker}>
        <label htmlFor='image'>{label}</label>
        <div className={styles.controls}>
            <div className={styles.preview}>
                {!pickedImage && <p>No image picked yet...</p>}
                {pickedImage && <Image src={pickedImage} alt="The image selected by the user" fill />}
            </div>
            <input
                className={styles.input}
                type="file"
                id={name}
                accept="image/png, image/jpeg"
                name={name}
                ref={pickerRef}
                onChange={pickHandle}
                required
            >
            </input>
            <button
                className={styles.button}
                type='button'
                onClick={clickHandle}
            > Pick an image</button>
        </div>
    </div>
}

export default ImagePicker;