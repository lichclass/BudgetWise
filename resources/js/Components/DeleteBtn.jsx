import { Button } from 'antd'

function DeleteBtn({ to, text, width }) {
    return (
        <Button
            type='link'
            href={to}
            className={`text-white font-bold py-8 px-4 rounded text-lg w-${width} text-center hover:text-white !important`}
            style={{
                background: '#D46060',
            }}
        >
            {text}
        </Button>
    )
}

export default DeleteBtn