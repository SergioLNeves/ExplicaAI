import { Typography } from "@material-tailwind/react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const currentYear = new Date().getFullYear();
 
export function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://www.linkedin.com/in/sergiolneves">Sérgio Luiz</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-black sm:justify-center">
           
            <Typography as="a" target="_blank" href="https://www.linkedin.com/in/sergiolneves/" className="opacity-80 transition-opacity hover:opacity-100">
              <LinkedInIcon />
            </Typography>
            
            <Typography as="a" target="_blank" href="https://github.com/SergioLNeves" className="opacity-80 transition-opacity hover:opacity-100">
              <GitHubIcon />
            </Typography>
            
          </div>
        </div>
      </div>
    </footer>
  );
}