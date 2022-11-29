import React from 'react'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom';
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col
} from "react-bootstrap";


const ScanYouId = () => {
    const history = useHistory();
    const [readFile, setReadFile] = React.useState("")
    const getDetails = () => {
        Swal.fire({

            imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIAA5AMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EADwQAAIBAwIEBAUCBAQGAwEAAAECAwAEERIhBRMxQQYiUWEUMnGBkSOhFUKx8DNSksEWJGJywtGi4fEH/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQAFBv/EACERAAICAgIDAQEBAAAAAAAAAAABAhEDEiExIjJBURMj/9oADAMBAAIRAxEAPwD6jd3EkVtK0KhpN8KTgE/WsLf+L7uykPxUFqRpDcuORmkb/wCOPXc1pru6YLjqTvWV4pwt73mvBdXFor5EqoAQ30z0P0oGirBq+PoO58bX0bXLLZwSJbhGdlueznAA269Mimn8XcQF6tiLG2e5YkFUutWjAz5hp27fmq9OAW08d1HHO0KyRRJgjJHLOQffOBVg3B4eIXUksU1xblgBKYZNPMwO9cuR7gl2Bh8c3Yggnezt0ErsqK851HSSDsFO1Ftv/wChTXimRLW2RVyW5lyFwAcddOKNZ+EoI7BIDPMnL1gSI2lyrMTpJH1onB/CFraLDz5mnjgV1SN/kwxOSR3ODjNEhE1Ae8PeI7jjMs4NrHHFE/L5iTBwWGDtt70bxXc3MfA70WbHm8ltJDaSu3XNQ4Nw48JQ2ltyxaqcxYGGH19frTN/bG7tJoS2kyqUz9RTVdck84wU0zBWfF3sbeya2hkinmiV0/5kyage7A52O++1W8XjOVo4GlsUiFxrSPVOoyynfJ7DamF8Mollbw/EzxSwxCFpIX061HrUOH+GLSC1torqNbh7Vn5Uki74Y7g+vahSY5yxsHB42nnMAj4YzmadoY8TrgsvX7VGfxlNH8WsvDCrW4DSjnKdjsCPUV228Ncia3dJRpt7uScLp6hwRj7Zo0vg6w+GuxZDlTXIwXJLaRqzgAnpmtuQMoYi94bM80CNIhjZhkrnOPamXYqwIb81y2gMaAHqBvRGAJ6ZzVEWeblS2eohecatLI6J3IYfNhScfikLLxXbTSMsuIkwTkMSevcev5qr8XW/Ju0ZGZRMGZh2LAYH7HpVFBEVhacqeavmBIGw6k4+xqqOOLVsCj6fDOsiB0YMpGxHeia8HH8vrVdYRra2sccZzgZye+d6Y5pO234pWoFpFbxTxCeHXqWzWhcyg8puYo1Ebkb9NqQi8c81ownCrh+dM0CYkTBdQSwznHbrVlxPg9lxOeGe8hSSSEnQWGdj1BFU1v4We3e25UkYit72S4CBcDS6kafbGanltZfiWGaVjsHi55rhoIOFTySKgkOmaM+UnHXOKD/x1btPBEtjI0kziONY7iNsn7NRrLw/Bw+e6SygVYL3PM0+VlOOg9tz9KDB4akjs+Fw/pB7CZWDKuBIoGPt61nmH/PB8NhC4eMMRgn17VnL3xcLTiHwT8NuHnZmChZY/NjfOM7bb71oEHkC47Yqj4x4dtbviacS+GjlkKGGZWHzJ6j3H9K52TYljc2pCX/HMa2nxZ4ZciAKxLcyPOFOCcavWu3HjWK2C/E8NnjZk1gPLECV+mrNAt/BUT8JhtrpI5JbaaR4nAIBUtnSQO3QEfei8V8JnioabmNZzyQ8qYJhsgZwMkZA3rPIrePAQTx9avbNcpYztCoUkqyErnpkasjrTH/FwS6itW4bd82ZiqAshyQMno3Yb1WN4Hnbh5h+KUSJDHEq6QFUqQWO3XJXvVqPD8NtxZeMW9sryyDTKhO4ztqHvjr613m2DphNErMyhgp3Ga7XgNt8Zr1PTPOlFW+DP8cuJ7a2mnWFW0lRhzgbnFUKcakZ2t1t4hKJGjwWPmOsKp+hz+1bnjlib+wltlfRrwcrjsQf9qzTeG4RmSad+fggSDAI8+sHp2P7V51nu4KoqGumSeUTQKOTp5wV+oY4BX7b/epJ4jeG3HItY9aRzSSBnO2g7fkb1YScHikcu08ra9PNzj9TS2R9Pt2FJyeH4hrZLiUGVSjEKuTkAZ/AFbEfNprksZ+O3g4dbSR2kMpmcJ/ikDJOFxt360CXxI6Wk00FvlYJuVKC+46b9PU4qTcMYwxxm5fyyiUMQDgg5xj0pdvD68t4zcNypECyrpGJCAfMfff9hTYpoROOIavON3No8Ymt108nmSkSfJggHG2/X+tJP4omWCWX4aMrHM0R/VPVdWe3Xyj/AFCmJuEG5aNZbl3CRcpzgZkGQd/rgVyHgLRSo5umZVmMunQNySx/8v2onsLX8mjs3iRY4pXSINyphEwd9I3XOc49QR9qHL4knhV3l4diKPls5Mu4VycHGPQE15vDaSPlp8htPMUIMORnc+/m/ajNwF3SWOS8ZxKsaMWUZITI/cHeu8gWsRE+Ii1zy4rdChneFXMmCxUjO33/AGqC+KJRHLJHZgmIPzVMvy6TjbboRvXofDTRKmi6bCkkZQHrpHX18oozeHVdJhzyJJoeVIwTGRqJzj13xWrYx/xLuyuJZYEeZOW56rnOKZDA98ZNARSiKG3IFeDFu+aclwefPmfBTeJ7yKJFjyHnOSgHbIIz+9UPD7yOO7n+Jf8ATkm1M2O3l/8ARqy8VWMjXcclvcxq2gB0kyDjOxBANUy8LuQDI0loyO2k6mOx7/y9cVTBrUBm9jaN1DIwKkZBB7HevEgt5T9KU4coXh8GkhsRgasYzjbpR+hGKGwGgN5xLkXMFrFFzJ5dTKucAKMZJP3FAXjMksqQRWjG5KNI8TPgIMkDf3wcVK+sHurqC8t3WK4hVkBZcq6NjII+w/FLWXh+WweKWzuFE4iMUhkTIYZLDbPYk1PLayvGsWnPZKDxQkgdktyqrbmZfOAXIOGUbdQRj8UePxBd/HJaPwt1dk14Eo2XVpz/AL/SoR+G4Vh4eokbNo5LHvLncg/VsH7U5dcKum4ub62uI4yLbkqOXnBznPWh8xn+PSGLvirQ3qWVrDzrkxmVhqwAucA59z/Sq9vFsTPAkFqWMiMVDOAdQbSy/XNOXnC5nv0vrKeOK45PKk1plXXOR9wc/mlLTwsba8tpWlSSKBGBR03Ls2otn/uoZbAwWKg3EPETWU9xB8G0nItxcZDAEjOMY9djQpfFSfDPcwWjSRrErk6wNy2kgjrkHNT4vwC5vb66uI7lI0uLYQBTHnSoJOc567mgz+FpXW9NrOkRvAhZSuVVgcsQPfb96x7DEsLXIWbxKkRaKSzlE6yxxvHkDHM+Rs+hP9Kfg4pbzcUk4cM86KNXPpvnYH22/NVFz4ZuJ3ec3cRuZJYSx5flCxHKqBn1J396Jb+Hry34hBfCeIXKvIZmCn9RWx5eu2MD8CjTl9BlDC1waIlcmvVPHoK9TSBxKoTyybucVGQFhvnONjTAQDcjNBlmSNdTlVHTLMBXlLs9+0kCMeU3HQUJ4S0Yxt6e1M85CSvlHbdhttmuc1dZTyhs4+anRBlIC0QULUJBpYbb0w0vkOoRjBxud8/3ihTZXBI2wTvVECLK2djACnbJNeXC9TvmuK6adRIA9c7fXNcEsRYAyRkkgABgc+9GAiWkO2VO9GUMNmxnft0pdZosgJLHlvl8wyfp60xnSGMmw6k/5QKw5nRg5rvQZoOqFes8eO5yNvT/AGohkjzgyoSvzLqH2rUBJHThxsDk9KNBCQQSOlLxyRmbCupdR8gbJ+9PBiF1vhFx8xOAK1sWlTJaFAGQNv3oUvLVWDgdNqI7oo1PLGFz1LClpXjx55UO2c5Gwx/f7UKZzTBMMHHahsKnJKnd4xp9WA7VASK6642DJnYg5zTYsBonDsdqYj9D1pZOuaZjz1b7Ub6FPhh0G1SnLhcRDUx7VyM+YV6Yvgsr6RpOTSsjqIyCuSA8yZ1JB0hPnY/0rmq8kbmRgiPO4UZzRbYRtCs07hEU4VCcBz70eW7ZfLDhnbbSNgB6kCo3NljhFCZivy+uNThu2NgK4wn5nLFzk4y5KjC+1FR7yEogJKgeZiPrtt9aNHNb30C6hpRdiSd2x3z1rN2dpEXM0hYOJzyh0yoy1MWshljydJI66TSBkjWV5Yyk2TiNV9PU/wB9qb4foZJArajkatsYPpTcbdissElaGdJ9RXqmQM7CvVVZKV4OonAwB2HeqnxDwq24pDb212TyUm5rqOrDQy4z2+b+tWpdV6VX8SDyOpRdWB/mAxXlrs+h1szMng95Fl08T0tIXkVhEPJKVZcj1XSQpB3IGM+lrxLw43EZhNDfPAwKsP8ALsjLuMjrq7b42pu3huSwMgGOwDCrGNWAI0mj2FSgjKXHg+5lUgcXKkyrKxCNkEBMact/0Y82dj671OHwndIluRxJ2lilRi76yCozkY1YOc981rwigeYgHvXHMbImhtx12NMgyeSRmeMcAjvoo41ZokjVF5OMoFDA7Ds2wGf29E5PCMb3wuY5VVUKFI2jBAC9j09jtjcela12iLDDjVUToxlCD7imgPrgy9h4TjtYoVke2Z4llVStuPIHxpxnJ2wTuc703xXgsd/w1bBrubSsEkQaU69epSMsO5GdjV02W2UUGVDgH16ZHWmKKYuTZkrbwc0E3OW6t5nDhiLiHWrYIwCM74VQPtRoPCs8AhMFxbK0DpJG3IOpmUR7OQdx+nsB69dq0keVB1b5PSiqVI2PvXOKB2ZQQ8ClWe5muJ4k503NL20ZV1PXCkk4FOce4UnFkeQSAkhV5cyl0XByCu4wfXqPWriOMPIVbBBHamI7EctjpwPrQujL+mNm4BJcMqXNyrRISyaYwrgsyM2ckjqgxt+aBF4RlwY47xYoZk5U6LHkMumNcqCdiVQg56g+1bdLaLSPMB9aMsSogO34ruDbZ8/ufBNxcO8knEBI7qucx7FljEasd+unP59qu+GcHa0mWWSUagCnKhBVGGepG5J96vZnGdKYC+gpcklgB60cY/QJSZJDmTzdulMou2x296goxuR5qnGdyPSmCGHQaRQrwIUGt9PXAOPManq6YqFwygLqVS24VmGy57ml5X4sPH7C0mt5VyddzsEVeifWnOHzIGltwxeVTmWTHzGkJ7bkR4KyKBu0oWjcKYPcFUUiJV2U/wA3fNROiyRbFiANtlIBqluJoRctKsTc5uiaSfuauZv8KTR5pQp0jPU71nUMsjyCDUJGxzZGbYD7dKxdg/QkNwqRH4ddc7ZMz6fl9h79atOFlDGwiiYJsdbdWPeqeWWZIgY4dFvnJBODL7j1q34a8soZ5ozGNtCf5RTodg5V4ju3rXK9XqosnSRl5b3HTOaqONXN9JHbiwlZHMwEhVgCE0t6q3fT2okshY4Xc57VGO2kmbMh0r6VDR9HJKiqF/4mublhBGIYRLiMm2zqXUm7ef019MZx2qxtOI+KpFl5tjbW+kOULQtIdgNI2cbk5P7Y2q1jKoMR7GiRTnmaNgO9auSbJjcUEgTjEnDoZkVfipmRpYpFUGFcAMqjOM5BO579+lU89v4tjtbVonnaSWJml86DltlfLnQdP83ZvrWrtZTld+9WBAKFcCiRJK7MEsXiK5FwJZL1crCY3Ecab5UMNJBz1Y9e35t1i4sllPhYGuFYrA0nVl9WC7Z+mAfatFEoLnbGKHOoyaYgLd0fPHm8XiWROXKYwzGMlEycumAcbbAP/qr2vxFmDK8QK4yNcUfmbMeeZtsozJgjB2HXbO5MYPUA1BkJO2etGjGjFm44zNJZ6YOIIFhAm/TVQ0m2c5GMfcfWrsHiy2luUSH4gsBccvfA/wCkMQPydvfarTlAnevYwce2PtRMBsy1vN4kFlh4rr4hsqkjKnZ1JJG2kaSwH06navC/8WW8MWoSTMCearBCSCYt1bAzjMmxHqN8A1rGIZCp7dDSwjLuwXG471mp2xk7y88X3CMbeB0ciR1yFIAYDSPqrZ+wqw4bdeIdcizLKx55Gm5C8vl5O4wAQcYx83vir5LRQcyS5z71OWBRgqQAOm9aoqzrPEjOV+1AeQ5znJFekOlAuf3rgAK05CZDkRLR6mOTUo86m/aoWXTSdxTIjCsQenY1l0KkuSKkZA7mpXRYRhV2UnzPjdR7V7ljO3apSDUF8pYA5KjvQZeYsKHsMuy3sCoyExk/pjOGJHUn2pWITW1yTcJ+pIPKqdh/SvarlLpZVUNKRhYz0T32plLj9J7WQh3j+aRt1/NRU0WNi8MwaZkRC7L1ONhQ7a1lmziPlW6sWbSN5T6UwZFilV0IS1KYxpySfXehzXNxPCokXEx2QROdx7/1xWUcqIXplkA3UvsYo0XBH/dnp9Pau8KiCNKzS82RmBkYdjjpQ2gLy6DIxuG/xJC3y+wpyxjRIyI0Kp6nqfemwXIGRqhmuV6vVTZPRitKRnyrUZ54rdOZcSLGmQCztpAz70d9JY+3Wk+KxxSWymS5FvpkVxIQCMg5HWoFbdH1MlUeA3xMHJWUTR6WAKtrGDnYYNGt2QsWVhp9c7VnZPDcLHWbt5BhFQ6VIGGVvT1H21Gp23hyJOECxWclBLzAzebfGNwcjofzvTUqI8m8vhs7C9tCygXMRPMMXzj5wM6frjfFWL3tqi5a5hVdRTLSAbjIPX6H8Vjv4Fbz8NishIVUTPLr0K2osrLuCMEgN19celMt4ZsP+Yne4/UMvN5siqxjGXY9e3nP4FZ9JJRZrYZInQzLIhixq16gVI9c0hJxvhJWYniVpiF9En6y+RskYO+xyCPsaUsOA2MXCzZKzi3M3PjKHGg4A6dCNs4OQcmlz4Z0SiZL+XmRSPJB+kuFDyGRgR33I+w96K6FqPNlsZ7cBGE0el0LqQ48yjGWHqNxvSg4pw2Vo1j4hbM0gUxhZl84YFlxv3CsR9D6V6LhdvBbJAtweWlo1shbGQp+ZvrsPxVDF4E4VyWS3vZzkoysrDKBQ+kD0GmUj6YrlM1o0CXdpJCk8dzE0UkZlVw4wyjGWB9Nx+aDJfWHmBvbcFQCf1BtnGPzqH5FesOFwcNW0jjfUsNv8PEpAAK5B/8AEfigW/ALKBeHogBPD5nljJXuwbb6bj/SPSmpsDU8/ELNcql5bnCaziUfLgHP0wR+RTFuygCVWDKd1IOQR9aXj8N2SQQroBWK8N2MqMliScfQA4+gFQSyisI5Ei1M0r8yRmPzN3OBsPoAK27M1H2vFbJWME+mKTmui7gdKLaymHI0Zz6ivXEayNrVcE9qJAtEFUNgkk0ZI87Eb0KFGU+am41MkgPYUxv8FjMSFVVh29utEYYGagxAGO9SdwFG9LVgSIl8NtTNriWZIwSMnGarycsTTvC2zeRfX/Y0UvVgQVyLT4ABsiTB9dNe+EO45igd/L1/enCwxVRx3iv8NRVj0tO4yoPYdzUuzLNIjXw53Gsfdev71A2+P5lH0WsufEnEOarMY2HddG1X3C+JxcRQ4BWVfnU/1FdszdIjPLI6MPrihsNOxIPfYUwaXnPm+1HFtuheSEVGzma9UA1epggy0sDczHLNLX9ms0P6jGOFGDsdWnp6mr6WBs5B3pPiPDzfWUto0mgSjBYDcbg7fioro+l3tFDDwS0LSMLpBE4yo1g4DZVe/qTivScCs45I8X+kBi4wRvv2/IFcu/BUDySEXrxxOyho9OcorK4GeucqTnPVjtQbnwxCIrGP4yUyWqECXTu2ZFck79wuCPfNHu/0n1f4NL4eiVl03EmFUrpHQ5GP/umYeFw/DTxx3LcufGSoBOkMTj98faqMeHMH9W+eUj5W0EYATT6/Q/agx+GA7aY+JzIRzAVjUqMtnzdeu/XuNq1TYLg/w0H8FCqQLw4Kqql1B2XoD7YA2+td/hIkZ+VxRszEuucEsu+T13+br2AFK8R4dHPAqRSvbtHEYVKqCFBGCVB6HBO4pC38Ny+TlcUeJo0aKDES/pxtqyNv+7bGBsNtqJTbEyxuPw0dnwy2WaOZL0ScyNwuN86lAJXelI+D20PLMPFlSPJbBIwVGjON+gKfbJqtHhx4Ft+RxR0NnqFr+gpEasW1A4x2bG2Og64pK48P2w0xDiTCJI3REaJcrqHt7k9s+mDuSUpfAHFovv4JbhV5fFowwKkZOR5gQO/U52p3hfCVtL0zfGvOUeQYJzpJx136jH71lP4Fbq5b49scyN/8EYJVdPr/APvfNWXDLG0tpy738kmZhcNhBGxmO7nUu+G2yPbcmiUpPsVrRsT0x1oDxgnDd+lciu45F1KRRGAkxg70aTB2QJVAJ1DHfNF1DGBvUHBQYO/rQlYBjgYPpW0wGwjhRs35roblgBd9qBrDnB61Ijy7Z+1GuFyKlfwm8rDdRvUEZgMOQcUMtjr171zUQN/ajVCXYxrp3hT/APOw/X/3VckerGDue1P8LUreR57Hb96GfTCh7Gj1Z2xWF8Qy8zi05O4BCD2AFbYEbE9Kyviqw5cwvU2STZ9+jetRFxn2OTmnuBzvDxSDQfmbSwHcHakMirbwxbtJxLnhvJCMn3JBGP8AeuONcWyKVuTgj6Uxmk7xiNPuDR4/ZC8vozgb1J/FepcSMehNeqpxI0GkTB3pd5AhI705cMp+Y9OtUPHuJQ8OjhkeBrh5pOXGgfHm0s2PuFI2B3x0615CfNH0cXXZy5kJ9ST70nI2evrSVxx625s6R27M0U6xYBySMHUw9SpVsj296TvOJXR4bbT2luJJJ7OSYaN8MFUjr1GSdup2o+R8ZxLQyA7LnHSjo8R2jAzjJrNXV/xCR5hbWj7a0jAQ9dsE5x+xxv7V3ncYCvoHw0a50sVVmYaRpzk9c9friiRk5KXSNI5gIJKjJPep2jRyKCqjcZB7dKy08N/dC15jHmxrlzK40q22TgdT1xiq2G14jdXspa8uIVjZVjKtpAK5AwAcY+XsM46CmLglnb4RcXPEGubgRJIMtkqAdyP7NQNxYxhVkuYxMzABA25J6bUpHwCGDLGZnkZiSyqoYHbv26D+zTtr4dt2jjaSIgRurqxc5LBQoJxjsBRbpHfzkxiIRtIOYfJ3NdWFS50Y+xqb28cakBg+++K7ByFJBGMjHvRb/gMsJxZJIj5SQR2q54VxAt+nIeneqxGWeUmNdh/lNGTH8owV/m9abGZHlxV0aF/1M4pd8D60CC5LRHqWAoJmcuF9OtOXJK7TGQAOlTVm3/vNQjw4yDn29KMi6/XH0ruzm6OqocZNR5Z7DHrR1ULtipdSQa4BshAgLLkbU/ajF1Ge+aVG3Wi2soN3Gud8/wC1DP1Oj7IuM+XFJcWmt0sJhdMgRkOAx6ntgfWs9xHxDd/EypbERxIxUYALEDbrWU4z/FLu8R4LyVQsRJJOdbZ2X2+tRlhYqc1p/C8sAsuWHVZ9ZLKTufSvnBTjZnOt5iCy8sw6QoPlyWzvjGemd8+1dWLjETxlZbtjqYqxKYB5n8+w20Y6e/tXHH2L7VX8TbTy6zkHHL+Dbna1HQSAE/nrVxd3XxVna3CjSHGSPT1pmL3QvL6MGspx1H4r1Lavb65r1WsjR//Z',
            confirmButtonText: "Confirm"
        })
            .then(() =>
               history.push("/admin/scanyouraddress")
            )
    }
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="2"></Col>
                    <Col md="8">
                        <Card>
                            <Card.Header>
                                <Card.Title as="h4" style={{ fontWeight: "700" }} >Upload Your Pan card</Card.Title>
                                <p className='text-success'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
                                    Nam et dolor tempor,ornare felis sit amet, ultricies ligula. </p>
                            </Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col md="1"></Col>
                                        <Col md="5"> <Card>
                                            <Card.Header>

                                                <img
                                                    alt="intimage"
                                                    style={{ width: "150px", height: "100px" }}
                                                    src={require("../assets/img/panCard.png")}
                                                />
                                                <Card.Title as="h4">Pan card</Card.Title>

                                            </Card.Header>

                                        </Card></Col>

                                    </Row>


                                    <Button
                                        className="btn-fill "
                                        variant="info"
                                        style={{ width: "200px" }}
                                        onClick={getDetails}
                                    >
                                        Upload Now
                                    </Button>
                                    <div className="clearfix"></div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ScanYouId