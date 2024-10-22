import { Button } from 'antd'

function GreenBtnCancel({ text, width, onClick }) {
    return (
        <Button
            type='primary'
            className={`text-white font-bold py-8 px-4 rounded text-lg w-${width} text-center hover:text-white`}
            style={{
                background: 'linear-gradient(90deg, rgba(45, 126, 155, 0.80) 0%, rgba(72, 169, 134, 0.80) 100%)',
            }}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}

export default GreenBtnCancel