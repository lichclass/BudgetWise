import { Button } from 'antd'

function GreenBtnLg({ to, text }) {
    return (
        <Button 
            type='link'
            href={to}
            className={`text-white font-bold py-5 px-4 rounded text-xl`}
            style={{
                background: 'linear-gradient(90deg, rgba(45, 126, 155, 0.80) 0%, rgba(72, 169, 134, 0.80) 100%)',
            }}
        >
            {text}
        </Button>
    )
}

export default GreenBtnLg