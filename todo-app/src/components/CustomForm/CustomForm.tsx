import { Button, Form, Input, InputNumber } from 'antd'
import { useState } from 'react'

export function CustomForm() {

    const [ name, setName ] = useState('')
    const [ surname, setSurname ] = useState('')
    


    const subMit = (e: any) => {
        const res = {
            name,
            surname
        }

        console.log('>>res', res)

    }

    return (
        <Form name='nest-messages'>
            <Form.Item
                // name={ [ 'user', 'name' ] }
                label='Numele'
                rules={ [
                    {
                        required: true
                    }
                ] }
            >
                <Input value={ name } onChange={ (e) => setName(e.target.value) } />
            </Form.Item>

            <Form.Item
                // name={ [ 'user', 'age' ] }
                label='Prenume'
                rules={ [
                    {
                        required: false
                    }
                ] }
            >
                <InputNumber value={ surname } onChange={ (num) => setSurname(num) } />
            </Form.Item>

            <Form.Item>
                <Button type='primary' onClick={ subMit }>
                    Trimite
                </Button>
            </Form.Item>
        </Form>

    )
}