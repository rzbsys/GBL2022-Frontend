import React, { useEffect, useState } from 'react';
import './style.scss';

import Logo from 'components/logo';
import Background from 'components/background';
import BoothItem from 'pages/boothlist/boothitem';
import SelectBox, { Button } from './selectbox';
import { useSelector } from 'react-redux';
import QrCode from '../qrcode';
import EditLoading from './editloading';

import { UpdateCongestion, GetCongestion } from 'api/Booth';
import { toast } from 'react-toastify';

import ConfirmProfile from './confirm';
import { NewScore } from 'api/Rank';

import Posteritem from 'pages/poster/boothitem';
import PosterLoading from 'pages/poster/pdfloading';

function MainPage() {
    const AuthState = useSelector((state) => state.Admin);
    const BoothState = useSelector((state) => state.Booth);
    const [QrDetected, SetQrDetected] = useState('');
    const [QrEnable, SetQrEnable] = useState(false);
    const [SelectedScore, SetSelectedScore] = useState(0);
    const [EditLoadingEnable, SetEditLoadingEnable] = useState(false);
    const [ConfirmEnable, SetConfirmEnable] = useState(false);

    const [BoothType, SetBoothType] = useState(BoothState.boothlist[0].name.split('//분야1//')[0]);
    const [PdfLoadingEnable, SetPdfLoadingEnable] = useState(false);

    useEffect(() => {
        if (BoothType === 'GBL') {
            GetCongestion(AuthState.BoothId).then((res) => {
                const init_cong = res.congestion;
                const target = document.getElementsByClassName(`SelectBoxInAdmin${2 - init_cong}`);
                target[0].checked = true;
            });
        }

    }, []);

    function EditCong(e) {
        SetEditLoadingEnable(true);
        e.preventDefault();
        const cong = e.target;
        var selected = -1;
        for (var i = 0; i < cong.length; i++) {
            if (cong[i].checked === true) {
                selected = parseInt(cong[i].value);
            }
        }
        UpdateCongestion(AuthState.BoothId, selected).then(() => {
            window.location.reload();
        }).catch(() => {
            toast.error('서버와의 연결이 원활하지 않습니다.');
        });
    }

    function QrCodeScan(e) {
        e.preventDefault();
        const score = e.target;
        var selected = -1;
        for (var i = 0; i < score.length; i++) {
            if (score[i].checked === true) {
                selected = parseInt(score[i].value);
            }
        }
        if (selected !== -1) {
            SetQrEnable(true);
            SetSelectedScore(selected);
        } else {
            toast.warn('점수를 선택해주세요.');
        }
    }

    function QrCallback(str) {
        console.log(str);
        SetQrDetected(str);
        SetConfirmEnable(true);
    }

    function ConfirmCallbackFunction() {
        SetConfirmEnable(false);
        SetEditLoadingEnable(true);
        NewScore(QrDetected, parseInt(AuthState.BoothId), parseInt(SelectedScore)).then(() => {
            window.location.reload();
        }).catch(() => {
            toast.error('서버와의 연결이 원활하지 않습니다.');
        });
    }

    return (
        <div className='defaultFrame' style={{ overflowY: "scroll" }}>
            {
                ConfirmEnable && <ConfirmProfile SetConfirmEnable={SetConfirmEnable} ConfirmCallback={ConfirmCallbackFunction} uid={QrDetected} score={SelectedScore}></ConfirmProfile>
            }
            {
                QrEnable && <QrCode SetQrEnable={SetQrEnable} QrCallback={QrCallback}></QrCode>
            }
            {
                EditLoadingEnable && <EditLoading></EditLoading>
            }
            <Logo></Logo>
            <Background></Background>
            <h1 className='w8 AdminTitle'>부스 상태 관리</h1>
            {
                BoothType === 'GBL'
                    ? <>
                        <p style={{ marginLeft: "20px", color: 'rgb(180, 180, 180)', position: 'relative' }}>변경하고자 하는 상태를 클릭하고,<br />수정하기 버튼을 누르면 변경됩니다.</p>
                        <div className="BoothItemFrame">
                            <BoothItem subtitle={BoothState.boothlist[0].content} congestion={BoothState.boothlist[0].congestion} title={BoothState.boothlist[0].name.split('//분야1//')[1]} boothid={AuthState.BoothId}></BoothItem>
                            <form onSubmit={EditCong}>
                                <SelectBox>
                                    <Button name="SelectBoxInAdmin" className="normal" value={2} id={0} text="원활"></Button>
                                    <Button name="SelectBoxInAdmin" className="ready" value={1} id={1} text="준비중"></Button>
                                    <Button name="SelectBoxInAdmin" className="crowded" value={0} id={2} text="혼잡"></Button>
                                </SelectBox>
                                <button className='AdminButton w6'>수정하기</button>
                            </form>
                        </div>

                    </>
                    : <>
                        {
                            PdfLoadingEnable && <PosterLoading></PosterLoading>
                        }
                        <p style={{ marginLeft: "20px", color: 'rgb(180, 180, 180)', position: 'relative' }}>포스터 부스는 부스 상태를 관리할 수 없습니다.</p>
                        <div className="BoothItemFrame">
                            <Posteritem SetPdfLoadingEnable={SetPdfLoadingEnable} boothid={AuthState.BoothId} category={BoothType} subtitle={BoothState.boothlist[0].content} title={BoothState.boothlist[0].name.split('//분야1//')[1]}></Posteritem>
                        </div>
                    </>
            }


            <h1 className='w8 AdminTitle SecondPart'>점수 부여</h1>
            <p style={{ marginLeft: "20px", color: 'rgb(180, 180, 180)', position: 'relative' }}>부여하고자 하는 점수를 클릭하고,<br />QR 코드 스캔하기 버튼을 눌러 QR코드를<br />인식하면 점수가 부여됩니다.</p>
            <div className="BoothItemFrame">
                <form onSubmit={QrCodeScan}>
                    <SelectBox>
                        <Button Checked value={0} name="Score" className="none" id={0} text="0점"></Button>
                        <Button value={80} name="Score" className="crowded" id={80} text="80점"></Button>
                        <Button value={90} name="Score" className="ready" id={90} text="90점"></Button>
                        <Button value={100} name="Score" className="normal" id={100} text="100점"></Button>
                    </SelectBox>
                    <button className='AdminButton w6' style={{ marginBottom: "100px" }}>QR 코드 스캔하기</button>
                </form>
            </div>
        </div>
    );
}

export default MainPage;