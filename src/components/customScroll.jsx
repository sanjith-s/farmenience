
import React from "react";
import { Box} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&::-webkit-scrollbar": {
      width: 7,
    },
    "&::-webkit-scrollbar-track": {
      background:"#000000",
      boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#000000",
      outline: `1px solid slategrey`,
    },
  },
}));

const Customscroll= (props) => {
  const classes = useStyles();

  return (
    <Box sx={{height:"50px",overflow:"auto"}}  className={classes.root}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quibusdam voluptatem eligendi accusamus. Corporis unde magni molestiae voluptas, iusto, dolorum voluptates alias nostrum corrupti id, sequi tempora. Laborum, itaque eos!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, unde quidem. Sed ratione et rerum ducimus quae deserunt laboriosam quaerat dignissimos harum ipsa nostrum nulla, consequatur dolorem eum est unde!localhost
      lorem
      lorem 2
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, deleniti repudiandae quasi odio cumque tenetur perferendis amet neque! Minus non vitae doloribus, facilis eaque ad cupiditate perspiciatis sequi nam nulla ratione molestiae, similique eos! Eum hic beatae obcaecati temporibus consequatur libero quae cum modi nesciunt error pariatur, placeat, quo eligendi non. Excepturi nam unde nihil amet optio tempore consequatur mollitia, laudantium, quas distinctio iusto ratione, magni explicabo! Iste, sequi eligendi delectus aperiam velit libero placeat consectetur, hic tenetur soluta tempora similique expedita ea optio atque quas consequatur, quam reprehenderit. Commodi quasi temporibus voluptates iste assumenda maxime omnis? Obcaecati sapiente sunt quasi pariatur vitae unde iure ipsam quis totam veritatis? Illo, sit. In atque voluptate perferendis culpa tempore pariatur tempora quaerat odit obcaecati ipsam repellat consequatur optio aliquid provident modi voluptas aut, saepe cumque alias. Cupiditate sunt ratione minima nisi laboriosam blanditiis eaque, repellat mollitia tempore? Omnis at dignissimos sint architecto adipisci reiciendis eos natus assumenda officia necessitatibus doloremque quia nulla voluptate maxime doloribus libero accusamus porro, magnam dicta esse earum minus tempore cum laborum? Id, veritatis! Minus praesentium obcaecati vel sit consequatur cum consectetur aut! Mollitia similique ad doloribus provident maiores facilis ullam odio. Ratione ea nesciunt aliquam, quos nobis quasi eum omnis, dolor natus ut atque rerum commodi deleniti fugit? Repudiandae hic labore fugiat unde ducimus voluptatum? Quasi expedita natus amet adipisci delectus ad. Blanditiis esse eos dolor ut voluptatem suscipit, fugiat debitis repellendus nulla perspiciatis provident dolores reiciendis nobis praesentium ducimus vitae quaerat illum quo cumque molestiae. Eum harum distinctio illo velit, natus adipisci, voluptatem cum quisquam soluta ratione ex blanditiis facilis consectetur excepturi dolor delectus! Nihil esse sapiente, nulla odio dolores dignissimos maxime explicabo voluptatibus ex nostrum, natus ab temporibus suscipit ipsum quidem deleniti sint delectus distinctio odit inventore eius amet recusandae ipsam fuga! Dolor, recusandae dignissimos?
    </Box>
  );

};

export default Customscroll;
