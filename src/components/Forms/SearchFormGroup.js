import React from 'react'

import { InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchFormGroup = () => {
    return (
        <div>
            <p>
                <InputGroup size='lg'>
                    <Form.Control
                        placeholder=""
                        aria-label=""
                        style={{ borderRadius: '0', fontSize: '14px', backgroundColor: '#d8d8d8' }} />
                    <Button class="btn btn-danger" style={{ backgroundColor: '#135592', color: '#fff', borderRadius: '0', border: 'none' }}>
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </InputGroup>
            </p>

            <p style={{ backgroundColor: '#d8d8d8', padding: '10px' }}>
                <InputGroup size="md">
                    <Form.Control type="text" placeholder="Date" />
                    <Form.Select aria-label="">
                        <option>Topic</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Form.Select aria-label="">
                        <option>Preacher</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </InputGroup>
            </p>
        </div>
    )
}

