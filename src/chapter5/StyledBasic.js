export default function StyledBasic() {
    return (
        <>
            {/*<style jsx global>{`*/}
            {/*    h3 {*/}
            {/*        background-color: yellow;*/}
            {/*    }*/}
            {/*`}</style>*/}
            <style jsx>{`
                :global(h3) {
                    color: red;
                }
                .panel {
                    width: 300px;
                    padding: 10px;
                    border: 1px solid #000;
                    border-radius: 5px;
                    background-color: royalblue;
                    color: white;
                }
            `}
            </style>
            <div className="panel"><b>Styled JSX</b>は、JSX式にスタイル定義を...</div>
        </>
    )
}