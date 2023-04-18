import React, { useEffect } from 'react'
import "../css/footer.css";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {
    Typography,
} from "@mui/material";

const Footer = () => {

    return (
        // <Container maxWidth={false} disableGutters style={{position:"sticky",marginTop:"1.25rem"}}>
        //     <Box
        //         sx={{
        //             display: "flex",
        //             flexDirection: "column",
        //             justifyContent: "center",
        //             alignItems: "center",
        //             backgroundColor: "#7bff96",
        //             height: "100%",
        //             width: "100%",
        //             background: "rgba(22, 229, 117, 1)"
        //         }}

        //     >
        //         <Grid container sx={{padding:".3125rem",paddingBottom:"0rem"}} spacing={2}>
        //             <Grid item sm={5} md={5} xs={12} direction="column" className="foot-body">
        //                 <CardContent style={{ borderRadius: ".5rem" }}>
        //                     <Stack style={{display:"flex",flexDirection:"column",rowGap:".9375rem"}}>
        //                         <Box className="foot-items" sx={{ display: "flex" }}>
        //                             <LocationOnIcon className="foot-items-logo" style={{fill:"#333"}}  />
        //                             <Typography sx={{ fontSize: "1.125rem", fontFamily: "Roboto" }}>
        //                                 Sardar Patel Road, Guindy, Chennai<br />Tamilnadu, India<br />Pincode: 600025
        //                             </Typography>
        //                         </Box>

        //                         <Box sx={{ display: "flex" }}>
        //                             <PhoneIcon className="foot-items-logo" style={{fill:"#333"}} />
        //                             <Typography sx={{ fontSize: "1.125rem", fontFamily: "Roboto" }}>
        //                                 +91 99999 99999
        //                             </Typography>
        //                         </Box>

        //                         <Box sx={{ display: "flex" }}>
        //                             <EmailIcon className="foot-items-logo" style={{fill:"#333"}} />
        //                             <Typography sx={{ fontSize: "1.125rem", fontFamily: "Roboto" }}>
        //                                 farmenience23@gmail.com
        //                             </Typography>
        //                         </Box>

        //                     </Stack>
        //                 </CardContent>
        //             </Grid>

        //             <Grid item sm={7} md={7} xs={12} direction="column" >
        //                 <CardContent style={{  borderRadius: ".5rem" }}>
        //                     <Stack>
        //                         <Box sx={{ display: "flex"}}>
        //                             <Typography sx={{ fontSize: "1.25rem", fontWeight: "bold", fontFamily: "Roboto" }}>
        //                                 ABOUT THE COMPANY
        //                             </Typography>
        //                         </Box>
        //                         <Box className="regular" sx={{ display: "flex", marginTop: "1.25rem" }}>
        //                             <Typography className="regular" sx={{ fontSize: "1rem" } } >
        //                                 Farmenience is a website that is built to make farming convenient and economical for the farmers. We are providing solutions to the existing problems in the field of agriculture to make India a healthier economy.<br /> {<Link href="../M17">{'Click me to know more'}</Link>}
        //                             </Typography>
        //                         </Box>
        //                         <Box className="iconFlex" sx={{ display: "flex", marginTop: "1.25rem",justifyContent:"center",columnGap:"1.25rem" }}>
        //                             <Link href="https://www.facebook.com/"><FacebookIcon style={{fill:"#333"}} /></Link>
        //                             <Link href="https://www.twitter.com/"><TwitterIcon style={{fill:"#333"}} /></Link>
        //                             <Link href="https://www.linkedin.com/"><LinkedInIcon style={{fill:"#333"}} /></Link>
        //                             <Link href="https://www.instagram.com/"><InstagramIcon style={{fill:"#333"}} /></Link>
        //                         </Box>
        //                     </Stack>
        //                 </CardContent>
        //             </Grid>
        //         </Grid>
        //     </Box>
        // </Container>


        <footer class="bg-[#ffff] cfoot">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="/" class="flex items-center">
                            <img src='src\images\ffarmenienec.jpg' class="h-8 mr-3" alt="FlowBite Logo" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Farmenience</span>
                        </a>
                    </div>
                    <div class="grid grid-cols-5 gap-2 sm:gap-2 sm:grid-cols-4">
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Quick Links</h2>
                            <ul class="text-gray-600 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="../aboutUs" class="hover:underline">About Us</a>
                                </li>
                                <li class="mb-4">
                                    <a href="../signup" class="hover:underline">Signup</a>
                                </li>
                                <li class="mb-4">
                                    <a href="../login" class="hover:underline">Login</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Features</h2>
                            <ul class="text-gray-600 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="../cropRecommendation" class="hover:underline">Crop Recommendation</a>
                                </li>
                                <li class="mb-4">
                                    <a href="../web" class="hover:underline">Market Prices</a>
                                </li>
                                <li class="mb-4">
                                    <a href="../M10a" class="hover:underline">Locate Markets</a>
                                </li>
                                <li class="mb-4">
                                    <a href="../mapngo" class="hover:underline">Locate NGOs</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Legal</h2>
                            <ul class="text-gray-600 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="termsAndCondition" class="hover:underline">Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a href="/ReviewsForm" class="hover:underline">Review Form</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-black">Contact Us</h2>
                            <ul class="text-gray-600 dark:text-gray-400 font-medium">
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3880122536807!2d80.23287127406883!3d13.010945214016484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f0d20f797%3A0x59f9f10c66e02a19!2sCollege%20of%20Engineering%2C%20Guindy!5e0!3m2!1sen!2sin!4v1681769930937!5m2!1sen!2sin" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                                <li class="mb-4">
                                    <a href="#" >+91 999999999</a>
                                </li>
                                <li class="mb-4">
                                    <a href="#" >farmenience23@gmail.com</a>
                                </li>
                                <li class="mb-4">
                                <div id="google_translate_element" ></div>
                                </li>
                            </ul>
                        </div>
                        {/* <div>
                            <div>
                                <div>
                                    <h2 className="title gx-mb-4"></h2>
                                    <div id="google_translate_element" ></div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Farmenience™</a>. All Rights Reserved.
                    </span>
                    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/techforum.ceg/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                            <span class="sr-only">Facebook page</span>
                        </a>
                        <a href="https://www.instagram.com/ceg_tech_forum/?hl=en&__coig_restricted=1" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                            <span class="sr-only">Instagram page</span>
                        </a>
                        <a href="https://twitter.com/CEG_Tech_Forum" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            <span class="sr-only">Twitter page</span>
                        </a>

                    </div>
                </div>
            </div>
        </footer>



    );
};

export default Footer;