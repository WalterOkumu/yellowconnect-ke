import styles from '../styles/Home.module.css';

export default function Lead() {
    return(
        <section id='sectionInfo' className="md:mt-20 mx-auto md:w-1/2 mb-9 w-full">
            <h1 className="text-3xl mb-3 font-bold text-[#FDEA03]">
                Promote your business in print and digital with the Yellow Connect packages!
            </h1>

            <h2 className='mb-3'> 
                Fill in the fields below to obtain a special offer of 30% OFF 
            </h2>
            {/*<div className="flex flex-col justify-center items-center gap-4 mt-8">
                <div>
                    <label htmlFor="nome" className="font-bold text-sm">Name: </label>
                    <input type='text' name='nome' id="nome" className="border w-80"/>
                </div>
                <div>
                    <label htmlFor="email" className="font-bold text-sm">E-mail: </label>
                    <input type='text' name='email' id="email" className="border w-80"/>
                </div>
                <div className="mr-4">
                    <label htmlFor="empresa" className="font-bold text-sm">Company: </label>
                    <input type='text' name='empresa' id="empresa" className="border w-80"/>
                </div>
                <button className="bg-[#FBED04] mt-2 px-8 py-1 mx-auto rounded font-bold text-sm md:w-auto w-1/2">Submit</button>
                </div>*/}

            <div id="mlb2-5786909" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-5786909">
                <div className="ml-form-align-center">
                    <div className="ml-form-embedWrapper embedForm">
                    <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                        <div className="ml-form-embedContent" style={{marginBottom:0}}></div>
                        <form className="ml-block-form" action="https://static.mailerlite.com/webforms/submit/u5v1y5" data-code="u5v1y5" method="post" target="_blank">
                        <div className="ml-form-formContent">
                            <div class="ml-form-fieldRow">
                                <div class="ml-field-group ml-field-name ml-validate-required">
                                    <input aria-label="name" aria-required="true" type="text" class="form-control" data-inputmask="" name="fields[name]" placeholder="Name" autocomplete="name" />
                                </div>
                            </div>
                            <div className="ml-form-fieldRow">
                                <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                    <input aria-label="email" aria-required="true" type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autoComplete="email" />
                                </div>
                            </div>
                            <div class="ml-form-fieldRow">
                                <div class="ml-field-group ml-field-phone ml-validate-required">
                                    <input aria-label="phone" aria-required="true" type="text" class="form-control" data-inputmask="" name="fields[phone]" placeholder="Phone" autocomplete="" />
                                </div>
                            </div>
                            <div className="ml-form-fieldRow ml-last-item">
                                <div className="ml-field-group ml-field-company">
                                    <input aria-label="company" type="text" className="form-control" data-inputmask="" name="fields[company]" placeholder="Company" autoComplete="" />
                                </div>
                            </div>
                        </div>
                        <input type="hidden" name="ml-submit" value="1" />
                        <div className="ml-form-embedSubmit">
                            <button type="submit" className="primary">Submit</button>
                            <button disabled="disabled" style={{display:'none'}} type="button" className="loading"> <div className="ml-form-embedSubmitLoad"></div> <span className="sr-only">Loading...</span> </button>
                        </div>
                        <input type="hidden" name="anticsrf" value="true" />
                        </form>
                    </div>
                    <div className="ml-form-successBody row-success" style={{display:'none'}}>
                        <div className="ml-form-successContent">
                        <h4>Thank You!</h4>
                        <p>We will send your proposal as soon as possible.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </section>
    );
}