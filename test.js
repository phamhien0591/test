import { useEffect, useState } from "react";
import './test.css'

const arr = ['firdt', 'second', 'recond', 'thur'];

export default function Test() {
    const [ar, setAr] = useState(arr);

    useEffect(() => {
        setAr(arr);
    }, [])
    return (
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
            <h1>Welcome to World</h1>
            <div>
                {ar.map((text1) => {
                    return (
                        <div className="total" key={text1} >
                            {ar.map((text2) => {
                                return (
                                    <div className="total1" key={text2}
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            lineHeight: '100px',
                                            border: '1px solid red',
                                            margin:'10px'
                                        }}>
                                        hien
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}