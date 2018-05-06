import React, { Component } from 'react';
import '../assets/css/skills.css';
// import ScrollReveal from 'scrollreveal';
// import { Link } from 'react-router-dom';
import Burns from '../assets/imgs/burns-gif.gif';
import Ham from '../assets/imgs/hammer-gif.gif';


class Skills extends Component {

    goTo = (index) => {
        const section = ['.skills-theme', '.skills-list'];
        document.querySelector(section[index]).scrollIntoView({
            behavior: 'smooth'
        })
    }

    render() {
        return (
            <div className='skills'>
                <section className='skills-theme'>
                    <h1>Skills.</h1>
                    <div className='arrow-down'>
                        <a onClick={() => this.goTo(1)}><i className="arrow down"></i></a>
                    </div>
                </section>
                <section className='skills-list'>
                    <a onClick={() => this.goTo(0)}><i className='arrow up'></i></a>
                    <div className='skills-background'>
                        <div className='bar-graph'>

                            <div className='under-graph'>
                                <div className='p-cSharp'>
                                </div>
                            </div>
                            <svg className='devicon-plain cSharp' viewBox="0 0 128 128">
                                <path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.8c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5s17.7-39.5 39.5-39.5c14.7 0 27.5 8.1 34.3 20l-13 7.5c-4.2-7.5-12.2-12.5-21.3-12.5-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zm51-41.5h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.5v-5h3.5l.9-4h-4.4v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zM102.3 66h3.8l.9-4h-3.8z"></path>
                            </svg>
                            <div className='under-graph'>
                                <div className='p-angular'>
                                </div>
                            </div>
                            <div className='under-graph'>
                                <div className='p-react'>
                                </div>
                            </div>
                            <div className='under-graph'>
                                <div className='p-jq'>
                                </div>
                            </div>
                            <div className='under-graph'>
                                <div className='p-sql'>
                                </div>
                            </div>
                            <div className='under-graph'>
                                <div className='p-boot'>
                                </div>
                            </div>
                            <div className='under-graph'>
                                <div className='p-css'>
                                </div>
                            </div>
                            <div className='under-graph'>
                                <div className='p-html'>
                                </div>
                            </div>
                            <div className='under-graph'>
                                <div className='p-js'>
                                </div>
                            </div>
                            <div className='under-graph'>
                                <div className='p-git'>
                                </div>
                            </div>
                        </div>
                        <div className='side-bar'>
                            <div className='dev-icons'>
                                <svg className='devicon-plain cSharp' viewBox="0 0 128 128">
                                    <path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.8c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5s17.7-39.5 39.5-39.5c14.7 0 27.5 8.1 34.3 20l-13 7.5c-4.2-7.5-12.2-12.5-21.3-12.5-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zm51-41.5h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.5v-5h3.5l.9-4h-4.4v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zM102.3 66h3.8l.9-4h-3.8z"></path>
                                </svg>
                                <svg className='devicon-plain ang' viewBox="0 0 128 128">
                                    <path fill="#C4473A" d="M52.864 64h23.28l-12.375-25.877zM63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635-59.637-20.485zm-15.766 73.974l-7.265 18.176-13.581.056 36.608-81.079-.07-.153h-.064l.001-.133.063.133h.14100000000000001l.123-.274v.274h-.124l-.069.153 38.189 81.417-13.074-.287-8.042-18.58-17.173.082"></path>
                                </svg>
                                <svg className='devicon-plain react' viewBox="0 0 128 128">
                                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                                </svg>
                                <svg className='devicon-plain jq' viewBox="0 0 128 128">
                                    <path fill="#0868AC" d="M65.283 106.928c-.828-.187-1.633-.446-2.441-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.388-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.238-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.173-.646-1.751-.982l-.591-.33c-.769-.452-1.529-.921-2.28-1.397l-.615-.41c-.546-.351-1.088-.709-1.623-1.079l-.523-.367c-.516-.365-1.026-.734-1.534-1.109l-.679-.514c-.464-.355-.927-.713-1.384-1.082l-.617-.495c-.581-.479-1.156-.959-1.724-1.453l-.188-.159c-.614-.539-1.217-1.092-1.812-1.647l-.51-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.599-1.69l-.078-.084c-.553-.604-1.092-1.221-1.621-1.844l-.424-.504c-.395-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.804-58.204l-8.611 10.921c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.411.801.617 1.198l.395.759.245.437.439.786c.262.461.53.92.805 1.379l.458.756c.304.491.615.976.934 1.46l.398.614c.438.655.888 1.309 1.352 1.951l.039.05.228.308c.4.553.814 1.099 1.232 1.639l.463.59c.373.469.752.935 1.139 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.032.033.062.068c.526.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.526.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.526.456 1.062.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.495.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.749.474 1.51.943 2.278 1.396l.63.355c.565.326 1.134.646 1.711.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.786.275 1.581.53 2.381.779l.575.172c.814.245 1.618.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.014 16.954-36.112 21.426-57.997 16.447zM46.069 63.697c1.195 1.713 2.52 3.751 4.105 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.202 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.484.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.679.448 1.02.672l.482.319c.544.349 1.096.689 1.656 1.015l.234.136c.483.278.973.552 1.463.818l.521.271c.339.177.678.358 1.024.53l.155.07c.702.346 1.411.68 2.136.995l.472.194c.578.246 1.163.486 1.75.71l.75.275c.533.198 1.068.378 1.608.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.69-24.886 50.69-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.7-.227c-.548-.177-1.092-.365-1.632-.562l-.736-.274c-.591-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.364-.177-.721-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.106-.661-1.65-1.008l-.498-.332c-.358-.232-.717-.469-1.069-.707-.759-.524-1.497-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.897-14.486-16.819-23.971-3.062-9.836-2.401-20.878 2.903-29.84l-6.517 9.2c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.038 2.216 4.013 3.528 5.892zM89.476 49.498c.339.125.678.237 1.022.354l.451.143c.484.152.966.329 1.467.424 22.739 4.394 28.908-11.669 30.549-14.034-5.403 7.779-14.482 9.646-25.623 6.942-.88-.213-1.848-.531-2.696-.832-1.088-.388-2.16-.83-3.201-1.329-1.979-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745l-3.52 4.851c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.112 10.492 14.475 18.721 17.494z"></path>
                                </svg>
                                <svg className='devicon-plain sql' viewBox="0 0 1478.201 1195.111"><g transform="matrix(.569 0 0 .569 199.451 -82.735)"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-2901.952" y1="923.573" x2="-2061.249" y2="1420.331" gradientTransform="matrix(.1234 0 0 -.1234 1158.33 1550.273)"><stop offset="0" stopColor="#909ca9" /><stop offset="1" stopColor="#ededee" /></linearGradient><path fill="url(#a)" d="M1410.773 814.195l-286.9 93.683-249.599 110.161-69.829 18.435c-17.784 16.916-36.431 34.049-56.599 51.397-22.119 19.082-42.72 36.433-58.553 49.008-17.564 13.88-43.587 39.902-56.814 56.38-19.735 24.721-35.348 50.96-42.071 71.13-11.928 36.433-6.07 73.297 16.916 107.346 29.492 43.369 88.261 87.606 156.785 117.749 34.916 15.4 93.683 35.132 137.92 46.19 73.512 18.651 215.771 38.819 294.054 41.857 15.828.65 37.082.65 37.947 0 1.737-1.088 13.881-24.289 27.979-53.129 48.142-98.238 82.838-190.402 101.703-269.119 11.276-47.706 20.166-111.246 26.019-186.492 1.521-21.036 2.169-91.514.868-115.37-1.953-39.033-5.423-70.692-10.84-101.703-.868-4.555-1.088-8.676-.652-8.892.865-.65 3.467-1.517 38.815-11.712l-7.153-16.912v-.005h.004zm-65.49 38.386c2.602 0 9.539 66.573 11.273 108.646.436 8.89.216 14.745-.216 14.745-1.733 0-36.649-20.599-61.583-36.212-21.687-13.663-62.888-40.988-69.393-46.192-2.173-1.517-1.957-1.733 15.828-7.807 30.14-10.194 101.706-33.18 104.091-33.18zm-146.161 48.143c1.953 0 6.937 2.816 18.865 10.191 44.671 27.974 105.393 61.805 131.415 73.083 8.022 3.469 8.887 2.166-9.542 14.746-39.468 26.889-88.697 53.344-148.983 80.018-10.624 4.771-19.514 8.456-19.73 8.456-.432 0 .865-5.418 2.598-11.925 14.53-54.001 22.772-108.647 23.208-152.452.216-21.687.216-21.687 2.169-22.334-.436.217-.22.217 0 .217zm-30.142 11.492c1.297 1.299.432 49.877-1.304 63.104-3.903 31.662-9.975 61.153-19.947 94.335-2.386 8.018-4.558 14.745-4.987 15.177-.872 1.083-30.581-27.975-40.339-39.251-16.916-19.518-30.141-39.035-39.9-58.117-4.988-9.759-12.793-28.84-12.144-29.492 3.469-2.385 117.753-46.622 118.621-45.756zm-141.826 55.731c.216 0 .432 0 .652.216.432.434 1.953 3.905 3.254 7.807 6.937 18.867 22.548 46.624 35.997 64.407 14.746 19.518 34.048 40.334 50.091 53.996 5.207 4.337 9.975 8.456 10.624 9.108 1.304 1.302 1.737 1.083-33.612 14.53-40.981 15.613-85.656 31.226-136.835 47.706a6825.474 6825.474 0 0 0-36.643 11.928c-1.955.652-1.303-.434 4.335-9.323 25.371-39.686 63.97-117.536 85.657-172.618 3.687-9.542 7.373-19.082 8.025-21.251.868-3.038 1.95-4.121 4.768-5.64 1.518-.43 3.038-.866 3.687-.866zm-43.367 17.999c.649.436-10.411 23.637-21.254 44.889-21.036 40.985-44.022 81.323-74.815 130.331-5.204 8.456-10.19 16.265-10.842 17.132-1.083 1.519-1.519 1.083-4.988-5.638-7.373-14.53-13.447-33.181-16.699-50.313-3.254-16.916-2.602-46.406 1.086-64.621 2.816-13.444 2.602-13.227 9.107-16.481 27.757-14.095 117.537-56.166 118.405-55.299zm374.073 15.182v9.107c0 48.359-5.204 114.716-12.797 163.077-1.301 8.456-2.389 15.393-2.602 15.613 0 0-6.288-1.733-13.661-3.905-32.527-10.193-67.875-25.156-99.754-42.718-21.038-11.494-51.612-30.363-50.743-31.231.213-.215 9.323-4.986 19.947-10.625 42.509-22.118 83.274-45.972 118.622-69.609 13.229-8.892 33.176-23.202 37.518-27.107l3.47-2.602zm-537.802 64.185c.867 0 .65 1.735-.651 9.542-.868 5.64-1.951 16.049-2.382 23.202-1.739 31.662 3.469 55.084 19.082 87.177 4.337 8.892 7.809 16.265 7.589 16.48-1.519 1.303-145.074 43.375-190.183 55.734-13.444 3.685-25.152 6.939-26.024 7.153-1.515.436-1.733.22-1.083-3.47 4.987-31.875 29.276-73.512 63.104-108.644 22.554-23.419 40.554-37.08 71.347-54.648 22.119-12.575 56.165-31.439 58.767-32.309.002-.217.218-.217.434-.217zm338.295 60.503c.216-.216 5.42 2.605 11.708 6.29 46.408 26.891 111.03 51.83 166.108 64.623l4.991 1.086-6.941 3.899c-28.84 16.049-123.606 55.515-220.538 91.732-14.098 5.202-27.975 10.409-30.581 11.492-2.602 1.083-4.988 1.735-4.988 1.519 0-.22 3.906-7.809 8.89-17.132 27.107-50.744 54.433-112.547 68.311-155.485 1.739-4.12 2.82-7.805 3.04-8.024zm-34.48 11.278c.22.221-1.517 4.771-3.687 9.975-18.865 45.756-43.59 95.636-75.249 151.583-8.022 14.314-14.746 25.808-14.966 25.808-.213 0-6.721-3.906-14.527-8.676-45.976-28.192-86.743-62.888-113.414-96.501l-3.905-4.771 19.732-5.422c70.696-19.298 130.762-40.116 190.4-65.704 8.459-3.471 15.4-6.292 15.616-6.292zm214.253 74.815s.217.217 0 0c.216 4.988-10.844 49.661-19.953 81.969-7.589 27.107-14.098 48.361-26.022 85.874-5.204 16.485-9.755 30.143-9.975 30.143-.216 0-1.517-.216-2.818-.647-64.405-11.714-122.089-27.977-176.303-49.661-15.182-6.074-36.866-15.833-38.167-16.916-.432-.438 12.58-6.506 29.06-13.663 98.669-43.154 201.024-92.164 236.153-113.196 4.119-2.603 7.373-3.903 8.025-3.903zm-494.646 16.916c.434.432-27.107 40.118-65.709 94.114-13.444 18.867-29.057 40.985-34.911 49.225-5.856 8.241-14.746 21.253-19.734 29.06l-9.112 14.096-9.759-8.24c-11.494-9.544-31.442-29.927-40.333-41.204-18.651-23.201-31.226-47.706-36.214-70.04-2.386-10.411-2.386-15.618-.22-16.265 3.252-.867 61.153-14.53 115.37-27.11 30.143-6.937 65.054-15.177 77.632-18.213 12.579-3.041 22.774-5.423 22.99-5.423zm27.756 10.626l6.937 7.806c31.231 34.914 63.108 60.724 101.708 83.272 6.941 3.906 12.144 7.373 11.708 7.594-1.514 1.083-134.016 48.136-195.385 69.389-34.478 12.143-62.888 21.901-63.102 21.901-.216 0-2.169-1.299-4.341-2.818l-3.901-2.82 6.288-9.106c20.383-29.493 45.976-61.803 101.707-129.028l38.381-46.19zm173.053 123.822c.213-.215 9.755 3.252 21.464 7.594 28.195 10.624 50.527 17.345 80.456 24.936 36.866 9.326 90.211 18.434 121.657 21.035 4.771.432 7.373.868 6.505 1.519-1.521.868-33.395 11.494-56.816 18.867-37.302 11.708-151.149 45.32-243.962 71.995-17.132 4.987-31.879 9.108-32.746 9.323-2.166.436-9.325-1.519-9.325-2.386 0-.431 5.204-7.153 11.494-14.527 31.225-37.3 62.238-78.935 88.044-118.403 7.154-10.846 13.229-19.736 13.229-19.953zm-38.17 1.087c.216.216-15.179 24.936-42.066 67.439-11.496 17.999-24.291 38.383-28.846 45.54-4.337 6.939-10.842 17.784-14.527 23.854l-6.29 11.061-3.252-.868c-7.809-2.169-62.672-21.471-77.202-27.325-18-7.157-36.649-15.829-50.529-23.202-17.346-9.326-39.03-23.206-37.297-23.637.433-.216 30.143-8.243 65.922-17.999 94.984-25.809 147.678-40.77 182.161-51.612 6.29-1.952 11.71-3.471 11.926-3.251zm269.985 63.318h.216c.868 2.171-34.26 99.755-47.06 130.547-2.815 6.939-3.896 8.677-5.417 8.456-3.687-.213-54.646-7.37-85.66-11.925-53.994-8.24-144.641-24.073-167.409-29.275l-5.204-1.083 32.307-7.378c69.396-15.613 102.791-24.069 136.619-34.478 42.722-13.011 85.011-29.276 127.729-49.225 6.722-3.037 12.361-5.422 13.879-5.639z" /><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-2882.7" y1="10288.81" x2="-2206.249" y2="10288.81" gradientTransform="matrix(.1234 0 0 -.1234 1158.33 1550.273)"><stop offset="0" stopColor="#939fab" /><stop offset="1" stopColor="#dcdee1" /></linearGradient><path fill="url(#b)" d="M1114.983 145.414c-4.771-.647-81.757 27.11-131.415 47.275-67.01 27.327-119.052 53.351-151.148 75.899-11.925 8.461-26.891 23.422-29.273 29.276-.867 2.169-1.303 4.771-1.303 7.373l29.06 27.541 69.175 22.119 164.594 29.493 188.228 32.312 1.953-16.264c-.649 0-1.085-.216-1.73-.216l-24.728-3.905-4.984-8.89c-25.59-45.107-53.781-101.056-70.261-138.789-12.793-29.276-24.938-63.102-31.662-87.391-3.687-14.746-4.119-15.613-6.501-15.829v-.005h-.005zm-3.474 11.063h.223c.213.214 1.081 6.29 1.95 13.442 3.683 30.364 10.411 59.635 21.035 91.297 8.022 23.855 8.022 22.555-1.301 19.734-22.119-6.07-121.221-23.202-193-33.177-11.494-1.519-21.253-3.036-21.253-3.252-.867-.867 51.827-28.41 75.031-39.25 29.709-13.665 111.246-47.711 117.315-48.794zm-209.047 97.15l8.461 2.816c45.97 15.616 161.551 37.736 225.31 42.94 7.154.651 13.229 1.303 13.442 1.303.216.216-5.852 3.469-13.661 7.154-30.79 15.397-64.621 34.264-88.042 48.794-6.937 4.335-13.229 7.807-14.094 7.807-.868 0-5.42-.868-10.191-1.519l-8.674-1.303-21.683-21.253c-38.167-37.08-68.094-65.704-79.588-76.549l-11.28-10.19zm-8.671 6.721l30.576 38.168c16.696 21.035 33.611 41.635 37.301 46.187 3.683 4.557 6.721 8.245 6.505 8.461-.868.65-44.236-7.809-67.226-13.011-23.637-5.423-33.395-8.025-47.924-12.577l-11.928-3.905v-3.038c.216-14.53 18.651-36.214 49.877-58.331l2.819-1.954zm259.791 52.046c.869 0 1.95 1.951 4.552 7.806 7.373 16.263 30.364 60.07 35.997 68.526 1.74 2.822 4.771 3.038-25.802-1.95-73.512-11.93-97.152-15.829-97.152-16.263 0-.216 2.169-1.735 4.988-3.254 22.771-12.575 45.756-28.624 66.142-45.756 4.988-4.121 9.542-8.024 10.407-8.676.216-.433.652-.649.868-.433z" /><radialGradient id="c" cx="-14217.448" cy="7277.705" r="898.12" gradientTransform="matrix(-.1185 -.0178 -.036 .237 -198.955 -1314.415)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ee352c" /><stop offset="1" stopColor="#a91d22" /></radialGradient><path fill="url(#c)" d="M804.66 294.828s-4.768 7.593-.215 18.87c2.822 6.937 11.061 15.393 20.384 24.069 0 0 96.5 94.114 108.211 107.561 53.344 61.585 76.549 122.305 78.718 206.012 1.301 53.78-8.894 101.054-34.264 155.919-45.106 98.453-140.307 207.098-287.117 327.67l21.472-7.157c13.878-10.411 32.745-21.467 76.982-45.756 102.137-55.952 217.071-107.346 358.028-160.258 202.971-76.335 536.715-165.681 726.676-194.736l19.737-3.038-3.038-4.771c-17.345-26.891-29.276-43.587-43.59-61.369-41.633-51.612-92.157-93.463-153.964-128.161-85.007-47.489-194.956-84.571-334.173-112.112-26.239-5.207-83.923-15.181-130.763-22.337-99.321-15.393-163.51-26.021-234.203-38.165-25.37-4.339-63.323-10.843-88.478-16.263-13.011-2.822-37.947-8.676-57.464-15.398-15.613-6.075-38.168-12.147-42.939-30.58zm55.952 54.216c.214-.214 3.683 1.083 8.24 2.602 8.24 2.816 18.865 6.07 31.446 9.542a1599.47 1599.47 0 0 0 28.624 7.589c13.011 3.251 23.852 6.288 24.068 6.288 1.521 1.519 23.424 71.558 30.797 98.449 2.815 10.195 4.988 18.867 4.771 18.867-.223.22-2.605-3.469-5.423-8.456-25.373-44.673-65.491-89.995-111.899-126.428-6.069-4.333-10.624-8.237-10.624-8.453zm106.692 29.492c1.085 0 5.856.651 11.708 1.951 36.866 8.24 103.008 20.818 145.293 27.975 7.157 1.083 12.797 2.387 12.797 2.818 0 .436-2.605 1.951-5.859 3.688-7.153 3.685-35.997 20.815-45.536 27.322-24.073 16.047-45.756 33.395-61.371 49.008-6.288 6.29-11.712 11.494-11.712 11.494s-1.297-3.685-2.386-8.242c-7.802-30.143-24.069-74.816-38.815-106.258-2.386-4.986-4.339-9.541-4.339-9.973 0 .433 0 .217.22.217zm187.795 35.781c1.301.432 3.47 7.806 7.806 24.069 8.025 31.446 11.712 66.576 10.411 99.321-.436 9.108-.868 17.564-1.304 18.651l-.649 2.166-11.276-3.685c-23.204-7.373-60.935-18.435-93.245-27.541-18.436-4.988-33.395-9.542-33.395-9.975 0-1.303 26.891-28.192 38.383-38.383 21.898-19.303 81.316-65.275 83.269-64.623zm14.963 2.166c.652-.647 89.779 14.746 130.331 22.554 30.145 5.854 73.948 14.963 76.549 16.049 1.301.432-3.254 3.034-17.784 9.539-57.248 25.808-99.754 49.008-142.036 77.202-11.06 7.373-20.386 13.444-20.602 13.444-.216 0-.433-6.287-.433-13.878 0-41.201-8.241-82.838-23.424-117.968-1.517-3.47-2.818-6.722-2.601-6.942zm230.516 45.542c.652.65-2.169 18.217-4.771 28.624-7.806 32.312-28.84 80.24-54.643 125.343-4.558 8.024-8.677 14.53-9.114 14.746-.429.216-6.285-3.038-13.009-6.941-25.154-14.746-53.778-28.624-85.007-41.637-8.671-3.685-16.263-6.723-16.48-7.153-1.521-1.303 68.308-47.493 105.174-69.612 29.276-17.781 76.982-44.239 77.85-43.37zm16.48 2.601c1.953 0 41.421 10.844 62.019 16.916 50.963 15.181 109.512 36.648 147.679 53.996l15.828 7.159-11.056 2.6c-93.245 21.467-173.049 46.192-250.034 77.418-6.289 2.602-11.928 4.771-12.357 4.771-.436 0 1.733-4.987 4.552-11.061 23.204-49.225 38.167-100.62 41.85-144.427.221-4.121.867-7.372 1.519-7.372zm-392.938 90.213c.649-.652 30.793 6.506 47.057 11.056 24.721 6.942 77.198 24.505 77.198 25.808 0 .216-5.853 5.204-12.79 11.278-28.408 23.637-55.734 48.572-88.481 80.234-9.759 9.328-17.997 16.917-18.429 16.917-.436 0-.649-1.304-.436-3.038 4.987-36.433 3.906-83.272-3.034-130.763-.653-6.074-1.302-11.276-1.085-11.492zm633.433.652c.429.431-13.881 22.984-22.988 35.777-13.009 18.649-32.098 43.375-75.252 97.588-22.765 28.622-48.358 60.936-56.812 71.778-8.678 10.842-15.831 19.948-16.051 19.948-.216 0-3.031-3.901-6.069-8.671-24.289-36.433-53.349-68.311-87.829-96.935-6.505-5.423-13.658-11.278-16.044-13.013-2.386-1.734-4.339-3.469-4.339-3.685 0-.649 36.862-16.483 64.841-27.757 49.01-19.952 115.794-43.805 165.892-59.203 26.24-8.239 54.215-16.263 54.651-15.827zm16.696 4.334c.865-.215 6.072 2.387 12.361 6.07 52.697 30.143 104.305 68.962 145.077 108.864 11.492 11.278 39.9 40.77 39.464 40.986 0 0-9.975.867-21.683 1.733-91.296 6.942-208.178 26.239-320.511 53.345-7.589 1.733-14.31 3.252-14.746 3.252-.429 0 8.025-8.456 18.653-18.647 65.922-63.538 96.067-103.656 131.628-175.22 4.986-10.623 9.325-19.731 9.757-20.383-.216 0-.216 0 0 0zm-482.936 49.446c3.038.647 31.229 13.88 52.48 24.503 19.517 9.755 48.794 25.372 50.311 26.671.216.216-10.195 5.638-22.984 11.928-40.772 20.384-75.684 39.682-112.118 61.802-10.408 6.29-19.082 11.497-19.298 11.497-.868 0-.652-.872 5.204-11.497 19.518-35.561 35.129-78.065 44.023-119.486.864-3.252 1.733-5.418 2.382-5.418zm-28.192 5.202c.652.652-6.721 27.323-11.273 41.853-8.894 27.541-23.856 62.02-38.383 88.043-3.474 6.069-8.677 14.961-11.496 19.948l-5.42 8.674-12.144-11.707c-14.094-13.663-25.59-22.12-40.333-29.712-5.859-3.033-10.411-5.638-10.411-6.069 0-1.735 37.082-35.347 65.49-59.635 20.383-17.566 63.321-52.045 63.97-51.395zm172.404 70.913l10.627 6.937c24.282 15.833 52.906 36.866 74.813 55.298 12.357 10.19 36.21 31.662 40.985 36.866l2.598 2.822-17.561 4.986c-99.321 27.538-176.087 52.043-265.649 85.007-9.975 3.685-18.433 6.721-19.085 6.721-1.297 0-2.385 1.083 19.954-19.519 57.251-52.691 107.992-110.812 145.726-167.411l7.592-11.707zm-45.324 11.276c.432.432-29.276 42.284-47.06 65.922-21.251 28.192-58.985 75.465-85.007 106.256-10.84 12.797-20.163 23.422-20.599 23.64-.652.216-.868-3.036-.868-8.024 0-26.242-6.721-54.216-18.433-78.068-4.988-9.975-5.856-12.361-4.768-13.444 4.119-3.688 67.223-39.686 107.123-61.153 26.89-14.312 68.956-35.563 69.612-35.129zm-274.107 67.225c.652 0 5.64 2.6 11.279 5.638 13.878 7.589 26.239 16.046 37.298 25.156.432.432-5.204 4.988-12.577 10.406-20.602 14.746-51.828 38.385-70.041 52.915-19.088 15.18-19.734 15.613-17.568 12.361 14.314-21.903 21.467-34.264 29.06-50.093 6.721-14.094 13.442-30.793 18.213-45.323 1.734-6.289 3.904-11.06 4.336-11.06zm73.083 57.248c1.081-.214 2.386 1.735 8.238 10.411 12.361 18.429 21.903 43.154 24.292 63.104l.429 4.339-29.705 11.494c-53.133 20.599-102.139 40.985-135.322 56.162-9.322 4.339-25.587 12.144-36.211 17.352-10.627 5.418-19.301 9.539-19.301 9.323s6.721-5.204 14.961-11.278c64.844-47.055 121.007-98.669 163.076-150.279 4.555-5.423 8.677-10.411 9.107-10.627l.436-.001zm-33.612 8.242c.868.867-23.853 28.84-40.768 45.971-41.853 42.723-83.273 76.12-134.669 108.649-6.505 4.119-12.359 7.804-13.011 8.24-1.519.867.432-1.303 22.986-25.808 14.314-15.397 25.155-28.408 37.516-44.453 8.24-10.624 9.759-12.143 21.688-20.604 31.878-22.987 105.39-72.864 106.258-71.995z" /></g>
                                </svg>
                                <svg className='devicon-plain boot' viewBox="0 0 128 128">
                                    <path fill="#5B4282" d="M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z"></path>
                                </svg>
                                <svg className='devicon-plain css' viewBox="0 0 128 128">
                                    <path fill="#1572B6" d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626 10.063-112.837h-110.48zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336-28.36 7.844v.001l-.022.019-28.311-7.888-1.917-21.739h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229 1.632-18.001h-32.282999999999994l-.277-3.043-.631-7.129-.331-3.828h34.748999999999995l1.264-14h-52.926l-.277-3.041-.63-7.131-.332-3.828h69.281l-.331 3.862z"></path>
                                </svg>
                                <svg className='devicon-plain html' viewBox="0 0 128 128">
                                    <path fill="#E44D26" d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"></path>
                                </svg>
                                <svg className='devicon-plain js' viewBox="0 0 128 128">
                                    <path fill="#F0DB4F" d="M2 1v125h125v-125h-125zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065-.001-10.115.046-20.188.046-30.188h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
                                </svg>
                                <svg className='devicon-plain git' viewBox="0 0 128 128">
                                    <path fill="#F34F29" d="M124.742 58.378l-55.117-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.443 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.462 6.607 2.293 9.993l13.992 13.994c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.049-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.779 3.777 3.779 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-4.088-9.905-.311-13.683.934-.933 1.855-1.638 2.855-2.11v-34.659c-1-.472-1.92-1.172-2.856-2.111-2.861-2.86-3.396-7.06-1.928-10.576l-14.233-14.313-37.754 37.79c-3.175 3.177-3.155 8.325.02 11.5l55.126 55.114c3.173 3.174 8.325 3.174 11.503 0l54.86-54.858c3.175-3.176 3.178-8.327.004-11.501z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className='chart'>
                            <h4>RESEARCHING STACKOVERFLOW...</h4><span>|</span>
                            <h4>MEH, GIVE ME A FEW</h4><span>|</span>
                            <h4>GOOD STUFF</h4><span>|</span>
                            <h4>EXCELLENT</h4><img className='gifs' src={Burns} alt='Burns'></img><span>|</span>
                            <h4>HAMMER DANCE</h4><img className='gifs' src={Ham} alt='Hammer'></img><span>|</span>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default Skills;