import React, { useState } from 'react';
import '../categories-filter/collapsible-filter.styles.scss';

import {Button, FormCheckbox} from 'shards-react';
import Collapsible from 'react-collapsible';

const BrandsFilter = () => {
    // const[winco, setIsWinco] = useState(false);
    // const[hobart, setIsHobart] = useState(false);
    // const[browne, setIsBrowne] = useState(false);
    // const[wusthof, setIsWusthof] = useState(false);
    // const[victorinox, setIsVictorinox] = useState(false);
    // const[crownVerity, setIsCrownVerity] = useState(false);
    // const[staub, setIsStaub] = useState(false);
    // const[lodge, setIsLodge] = useState(false);
    // const[lecreuset, setIsLecreuset] = useState(false);
    // const[trudeau, setIsTrudeau] = useState(false);

    //can also be written like:
    const [selected, setSelected] = useState({});
    const { winco, hobart, browne, wusthof, victorinox, crownverity, staub, lodge, lecreuset, trudeau } = selected;

    const handleChange = (e, brand) => {
        setSelected((brands) => ({ ...brands, [brand]: !selected[brand] }));
      };

    return (
        <div className='collapsible-filter-container'>
            <Collapsible trigger={<Button className='collapsible-filter-btn' outline theme='light'>Brands</Button>}>
                <FormCheckbox className="brand-item"
                    // toggle
                    checked={winco}
                    onChange={(e) => handleChange(e, "winco")}
                    >
                    Winco
                </FormCheckbox>

                <FormCheckbox className="brand-item"
                    // toggle
                    checked={hobart}
                    onChange={(e) => handleChange(e, "hobart")}
                    >
                    Hobart
                </FormCheckbox>

                <FormCheckbox className="brand-item"
                    // toggle
                    checked={browne}
                    onChange={(e) => handleChange(e, "browne")}
                    >
                    Browne
                </FormCheckbox>

                <FormCheckbox className="brand-item"
                    // toggle
                    checked={wusthof}
                    onChange={(e) => handleChange(e, "wusthof")}
                    >
                    Wusthof
                </FormCheckbox>

                <FormCheckbox className="brand-item"
                    // toggle
                    checked={victorinox}
                    onChange={(e) => handleChange(e, "victorinox")}
                    >
                    Victorinox
                </FormCheckbox>

                <FormCheckbox className="brand-item"
                    // toggle
                    checked={crownverity}
                    onChange={(e) => handleChange(e, "crownverity")}
                    >
                    Crorn Verity
                </FormCheckbox>

                <FormCheckbox className="brand-item"
                    // toggle
                    checked={staub}
                    onChange={(e) => handleChange(e, "staub")}
                    >
                    Staub
                </FormCheckbox>

                <FormCheckbox className="brand-item"
                    // toggle
                    checked={lodge}
                    onChange={(e) => handleChange(e, "lodge")}
                    >
                    Lodge
                </FormCheckbox>

            </Collapsible>

        </div>

    )

}
export default BrandsFilter