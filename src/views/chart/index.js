import React from 'react'

function App() {
    const [loaded, error] = useScript(
        'https://pm28k14qlj.codesandbox.io/test-external-script.js'
    );

    return (
        <div>
            <div>
                Script loaded: <b>{loaded.toString()}</b>
            </div>
            {loaded && !error && (
                <div>
                    Script function call response: <b>{TEST_SCRIPT.start()}</b>
                </div>
            )}
        </div>
    );
}