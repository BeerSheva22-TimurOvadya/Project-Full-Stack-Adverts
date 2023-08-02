import { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import {ElectronicsTypes} from '../../model/Common'

interface ElectronicsFormProps {
    submitFn: (electronics: any) => void;
    }

const ElectronicsForm: React.FC<ElectronicsFormProps> = ({ submitFn }) => {
    const [electronics, setElectronics] = useState({
        type: '',
        screenSize: '',
        model: '',
        brand: '',
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setElectronics({ ...electronics, [name]: value });
    };

    const handleSubmit = () => {
        submitFn(electronics);
    };

    return (
        <form>
            <FormControl style={{ minWidth: '200px' }}>
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                    labelId="type-label"
                    name="type"
                    value={electronics.type}
                    onChange={handleInputChange}
                    label="Type"
                >
                    {ElectronicsTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>            
            <TextField
                name="brand"
                label="Brand"
                value={electronics.brand}
                onChange={handleInputChange}
                type="string"
            />
            <TextField
                name="model"
                label="Model"
                value={electronics.model}
                onChange={handleInputChange}
            />
            <TextField
                name="screenSize"
                label="Screen Size (inches)"
                value={electronics.screenSize}
                onChange={handleInputChange}
                type="number"
            />
            <Button onClick={handleSubmit}>Submit</Button>
        </form>
    );
};

export default ElectronicsForm;