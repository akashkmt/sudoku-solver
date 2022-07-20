import React from "react";
import "./SudokuInputBox.css";
const sudoku = require("sudoku");

function SudokuInputBox() {
  const [input0, setInput0] = React.useState(0);
  const [input1, setInput1] = React.useState(0);
  const [input2, setInput2] = React.useState(0);
  const [input3, setInput3] = React.useState(0);
  const [input4, setInput4] = React.useState(0);
  const [input5, setInput5] = React.useState(0);
  const [input6, setInput6] = React.useState(0);
  const [input7, setInput7] = React.useState(0);
  const [input8, setInput8] = React.useState(0);
  const [input9, setInput9] = React.useState(0);
  const [input10, setInput10] = React.useState(0);
  const [input11, setInput11] = React.useState(0);
  const [input12, setInput12] = React.useState(0);
  const [input13, setInput13] = React.useState(0);
  const [input14, setInput14] = React.useState(0);
  const [input15, setInput15] = React.useState(0);
  const [input16, setInput16] = React.useState(0);
  const [input17, setInput17] = React.useState(0);
  const [input18, setInput18] = React.useState(0);
  const [input19, setInput19] = React.useState(0);
  const [input20, setInput20] = React.useState(0);
  const [input21, setInput21] = React.useState(0);
  const [input22, setInput22] = React.useState(0);
  const [input23, setInput23] = React.useState(0);
  const [input24, setInput24] = React.useState(0);
  const [input25, setInput25] = React.useState(0);
  const [input26, setInput26] = React.useState(0);
  const [input27, setInput27] = React.useState(0);
  const [input28, setInput28] = React.useState(0);
  const [input29, setInput29] = React.useState(0);
  const [input30, setInput30] = React.useState(0);
  const [input31, setInput31] = React.useState(0);
  const [input32, setInput32] = React.useState(0);
  const [input33, setInput33] = React.useState(0);
  const [input34, setInput34] = React.useState(0);
  const [input35, setInput35] = React.useState(0);
  const [input36, setInput36] = React.useState(0);
  const [input37, setInput37] = React.useState(0);
  const [input38, setInput38] = React.useState(0);
  const [input39, setInput39] = React.useState(0);
  const [input40, setInput40] = React.useState(0);
  const [input41, setInput41] = React.useState(0);
  const [input42, setInput42] = React.useState(0);
  const [input43, setInput43] = React.useState(0);
  const [input44, setInput44] = React.useState(0);
  const [input45, setInput45] = React.useState(0);
  const [input46, setInput46] = React.useState(0);
  const [input47, setInput47] = React.useState(0);
  const [input48, setInput48] = React.useState(0);
  const [input49, setInput49] = React.useState(0);
  const [input50, setInput50] = React.useState(0);
  const [input51, setInput51] = React.useState(0);
  const [input52, setInput52] = React.useState(0);
  const [input53, setInput53] = React.useState(0);
  const [input54, setInput54] = React.useState(0);
  const [input55, setInput55] = React.useState(0);
  const [input56, setInput56] = React.useState(0);
  const [input57, setInput57] = React.useState(0);
  const [input58, setInput58] = React.useState(0);
  const [input59, setInput59] = React.useState(0);
  const [input60, setInput60] = React.useState(0);
  const [input61, setInput61] = React.useState(0);
  const [input62, setInput62] = React.useState(0);
  const [input63, setInput63] = React.useState(0);
  const [input64, setInput64] = React.useState(0);
  const [input65, setInput65] = React.useState(0);
  const [input66, setInput66] = React.useState(0);
  const [input67, setInput67] = React.useState(0);
  const [input68, setInput68] = React.useState(0);
  const [input69, setInput69] = React.useState(0);
  const [input70, setInput70] = React.useState(0);
  const [input71, setInput71] = React.useState(0);
  const [input72, setInput72] = React.useState(0);
  const [input73, setInput73] = React.useState(0);
  const [input74, setInput74] = React.useState(0);
  const [input75, setInput75] = React.useState(0);
  const [input76, setInput76] = React.useState(0);
  const [input77, setInput77] = React.useState(0);
  const [input78, setInput78] = React.useState(0);
  const [input79, setInput79] = React.useState(0);
  const [input80, setInput80] = React.useState(0);

  const handleInput = (e) => {
    let value = e.target.value;
    if (value === "") {
      return 0;
    }
    return value[value.length - 1];
  };

  const handleSolve = () => {
    let matrix = [
      input0,
      input1,
      input2,
      input3,
      input4,
      input5,
      input6,
      input7,
      input8,
      input9,
      input10,
      input11,
      input12,
      input13,
      input14,
      input15,
      input16,
      input17,
      input18,
      input19,
      input20,
      input21,
      input22,
      input23,
      input24,
      input25,
      input26,
      input27,
      input28,
      input29,
      input30,
      input31,
      input32,
      input33,
      input34,
      input35,
      input36,
      input37,
      input38,
      input39,
      input40,
      input41,
      input42,
      input43,
      input44,
      input45,
      input46,
      input47,
      input48,
      input49,
      input50,
      input51,
      input52,
      input53,
      input54,
      input55,
      input56,
      input57,
      input58,
      input59,
      input60,
      input61,
      input62,
      input63,
      input64,
      input65,
      input66,
      input67,
      input68,
      input69,
      input70,
      input71,
      input72,
      input73,
      input74,
      input75,
      input76,
      input77,
      input78,
      input79,
      input80,
    ];

    //    console.log(matrix);
    matrix.map(Number);
    let puzzle = [];
    matrix.forEach((item) => {
      if (item === 0) {
        puzzle.push(null);
      } else {
        puzzle.push(+item);
      }
    });
    // console.log(puzzle);
    let solved = sudoku.solvepuzzle(puzzle);
    // console.log(solved);
    if (solved !== null) {
      setInput0(solved[0]);
      setInput1(solved[1]);
      setInput2(solved[2]);
      setInput3(solved[3]);
      setInput4(solved[4]);
      setInput5(solved[5]);
      setInput6(solved[6]);
      setInput7(solved[7]);
      setInput8(solved[8]);
      setInput9(solved[9]);
      setInput10(solved[10]);
      setInput11(solved[11]);
      setInput12(solved[12]);
      setInput13(solved[13]);
      setInput14(solved[14]);
      setInput15(solved[15]);
      setInput16(solved[16]);
      setInput17(solved[17]);
      setInput18(solved[18]);
      setInput19(solved[19]);
      setInput20(solved[20]);
      setInput21(solved[21]);
      setInput22(solved[22]);
      setInput23(solved[23]);
      setInput24(solved[24]);
      setInput25(solved[25]);
      setInput26(solved[26]);
      setInput27(solved[27]);
      setInput28(solved[28]);
      setInput29(solved[29]);
      setInput30(solved[30]);
      setInput31(solved[31]);
      setInput32(solved[32]);
      setInput33(solved[33]);
      setInput34(solved[34]);
      setInput35(solved[35]);
      setInput36(solved[36]);
      setInput37(solved[37]);
      setInput38(solved[38]);
      setInput39(solved[39]);
      setInput40(solved[40]);
      setInput41(solved[41]);
      setInput42(solved[42]);
      setInput43(solved[43]);
      setInput44(solved[44]);
      setInput45(solved[45]);
      setInput46(solved[46]);
      setInput47(solved[47]);
      setInput48(solved[48]);
      setInput49(solved[49]);
      setInput50(solved[50]);
      setInput51(solved[51]);
      setInput52(solved[52]);
      setInput53(solved[53]);
      setInput54(solved[54]);
      setInput55(solved[55]);
      setInput56(solved[56]);
      setInput57(solved[57]);
      setInput58(solved[58]);
      setInput59(solved[59]);
      setInput60(solved[60]);
      setInput61(solved[61]);
      setInput62(solved[62]);
      setInput63(solved[63]);
      setInput64(solved[64]);
      setInput65(solved[65]);
      setInput66(solved[66]);
      setInput67(solved[67]);
      setInput68(solved[68]);
      setInput69(solved[69]);
      setInput70(solved[70]);
      setInput71(solved[71]);
      setInput72(solved[72]);
      setInput73(solved[73]);
      setInput74(solved[74]);
      setInput75(solved[75]);
      setInput76(solved[76]);
      setInput77(solved[77]);
      setInput78(solved[78]);
      setInput79(solved[79]);
      setInput80(solved[80]);
    }
    else{
      alert("No solution found");
    }
  };

  const handleReset = () => {
    setInput0(0);
    setInput1(0);
    setInput2(0);
    setInput3(0);
    setInput4(0);
    setInput5(0);
    setInput6(0);
    setInput7(0);
    setInput8(0);
    setInput9(0);
    setInput10(0);
    setInput11(0);
    setInput12(0);
    setInput13(0);
    setInput14(0);
    setInput15(0);
    setInput16(0);
    setInput17(0);
    setInput18(0);
    setInput19(0);
    setInput20(0);
    setInput21(0);
    setInput22(0);
    setInput23(0);
    setInput24(0);
    setInput25(0);
    setInput26(0);
    setInput27(0);
    setInput28(0);
    setInput29(0);
    setInput30(0);
    setInput31(0);
    setInput32(0);
    setInput33(0);
    setInput34(0);
    setInput35(0);
    setInput36(0);
    setInput37(0);
    setInput38(0);
    setInput39(0);
    setInput40(0);
    setInput41(0);
    setInput42(0);
    setInput43(0);
    setInput44(0);
    setInput45(0);
    setInput46(0);
    setInput47(0);
    setInput48(0);
    setInput49(0);
    setInput50(0);
    setInput51(0);
    setInput52(0);
    setInput53(0);
    setInput54(0);
    setInput55(0);
    setInput56(0);
    setInput57(0);
    setInput58(0);
    setInput59(0);
    setInput60(0);
    setInput61(0);
    setInput62(0);
    setInput63(0);
    setInput64(0);
    setInput65(0);
    setInput66(0);
    setInput67(0);
    setInput68(0);
    setInput69(0);
    setInput70(0);
    setInput71(0);
    setInput72(0);
    setInput73(0);
    setInput74(0);
    setInput75(0);
    setInput76(0);
    setInput77(0);
    setInput78(0);
    setInput79(0);
    setInput80(0);
  };

  const handleCreate = () => {
    let puzzle = sudoku.makepuzzle();
    let solved = [];

    puzzle.forEach((ele) => {
      if (ele == null) {
        solved.push(0);
      } else {
        solved.push(ele);
      }
    });

    setInput0(solved[0]);
    setInput1(solved[1]);
    setInput2(solved[2]);
    setInput3(solved[3]);
    setInput4(solved[4]);
    setInput5(solved[5]);
    setInput6(solved[6]);
    setInput7(solved[7]);
    setInput8(solved[8]);
    setInput9(solved[9]);
    setInput10(solved[10]);
    setInput11(solved[11]);
    setInput12(solved[12]);
    setInput13(solved[13]);
    setInput14(solved[14]);
    setInput15(solved[15]);
    setInput16(solved[16]);
    setInput17(solved[17]);
    setInput18(solved[18]);
    setInput19(solved[19]);
    setInput20(solved[20]);
    setInput21(solved[21]);
    setInput22(solved[22]);
    setInput23(solved[23]);
    setInput24(solved[24]);
    setInput25(solved[25]);
    setInput26(solved[26]);
    setInput27(solved[27]);
    setInput28(solved[28]);
    setInput29(solved[29]);
    setInput30(solved[30]);
    setInput31(solved[31]);
    setInput32(solved[32]);
    setInput33(solved[33]);
    setInput34(solved[34]);
    setInput35(solved[35]);
    setInput36(solved[36]);
    setInput37(solved[37]);
    setInput38(solved[38]);
    setInput39(solved[39]);
    setInput40(solved[40]);
    setInput41(solved[41]);
    setInput42(solved[42]);
    setInput43(solved[43]);
    setInput44(solved[44]);
    setInput45(solved[45]);
    setInput46(solved[46]);
    setInput47(solved[47]);
    setInput48(solved[48]);
    setInput49(solved[49]);
    setInput50(solved[50]);
    setInput51(solved[51]);
    setInput52(solved[52]);
    setInput53(solved[53]);
    setInput54(solved[54]);
    setInput55(solved[55]);
    setInput56(solved[56]);
    setInput57(solved[57]);
    setInput58(solved[58]);
    setInput59(solved[59]);
    setInput60(solved[60]);
    setInput61(solved[61]);
    setInput62(solved[62]);
    setInput63(solved[63]);
    setInput64(solved[64]);
    setInput65(solved[65]);
    setInput66(solved[66]);
    setInput67(solved[67]);
    setInput68(solved[68]);
    setInput69(solved[69]);
    setInput70(solved[70]);
    setInput71(solved[71]);
    setInput72(solved[72]);
    setInput73(solved[73]);
    setInput74(solved[74]);
    setInput75(solved[75]);
    setInput76(solved[76]);
    setInput77(solved[77]);
    setInput78(solved[78]);
    setInput79(solved[79]);
    setInput80(solved[80]);
  };

  return (
    <div>
      <h2>SUDOKU</h2>
      <div className="sudoku-input-box">
        <div className="sudoku-input-box-row">
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input0}
              onChange={(e) => {
                setInput0(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input1}
              onChange={(e) => {
                setInput1(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input2}
              onChange={(e) => {
                setInput2(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input3}
              onChange={(e) => {
                setInput3(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input4}
              onChange={(e) => {
                setInput4(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input5}
              onChange={(e) => {
                setInput5(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input6}
              onChange={(e) => {
                setInput6(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input7}
              onChange={(e) => {
                setInput7(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input8}
              onChange={(e) => {
                setInput8(handleInput(e));
              }}
            />
          </div>
        </div>
        <div className="sudoku-input-box-row">
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input9}
              onChange={(e) => {
                setInput9(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input10}
              onChange={(e) => {
                setInput10(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input11}
              onChange={(e) => {
                setInput11(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input12}
              onChange={(e) => {
                setInput12(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input13}
              onChange={(e) => {
                setInput13(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input14}
              onChange={(e) => {
                setInput14(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input15}
              onChange={(e) => {
                setInput15(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input16}
              onChange={(e) => {
                setInput16(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input17}
              onChange={(e) => {
                setInput17(handleInput(e));
              }}
            />
          </div>
        </div>
        <div className="sudoku-input-box-row">
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input18}
              onChange={(e) => {
                setInput18(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input19}
              onChange={(e) => {
                setInput19(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input20}
              onChange={(e) => {
                setInput20(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input21}
              onChange={(e) => {
                setInput21(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input22}
              onChange={(e) => {
                setInput22(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input23}
              onChange={(e) => {
                setInput23(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input24}
              onChange={(e) => {
                setInput24(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input25}
              onChange={(e) => {
                setInput25(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input26}
              onChange={(e) => {
                setInput26(handleInput(e));
              }}
            />
          </div>
        </div>
        <div className="sudoku-input-box-row">
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input27}
              onChange={(e) => {
                setInput27(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input28}
              onChange={(e) => {
                setInput28(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input29}
              onChange={(e) => {
                setInput29(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input30}
              onChange={(e) => {
                setInput30(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input31}
              onChange={(e) => {
                setInput31(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input32}
              onChange={(e) => {
                setInput32(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input33}
              onChange={(e) => {
                setInput33(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input34}
              onChange={(e) => {
                setInput34(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input35}
              onChange={(e) => {
                setInput35(handleInput(e));
              }}
            />
          </div>
        </div>
        <div className="sudoku-input-box-row">
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input36}
              onChange={(e) => {
                setInput36(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input37}
              onChange={(e) => {
                setInput37(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input38}
              onChange={(e) => {
                setInput38(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input39}
              onChange={(e) => {
                setInput39(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input40}
              onChange={(e) => {
                setInput40(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input41}
              onChange={(e) => {
                setInput41(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input42}
              onChange={(e) => {
                setInput42(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input43}
              onChange={(e) => {
                setInput43(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input44}
              onChange={(e) => {
                setInput44(handleInput(e));
              }}
            />
          </div>
        </div>
        <div className="sudoku-input-box-row">
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input45}
              onChange={(e) => {
                setInput45(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input46}
              onChange={(e) => {
                setInput46(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input47}
              onChange={(e) => {
                setInput47(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input48}
              onChange={(e) => {
                setInput48(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input49}
              onChange={(e) => {
                setInput49(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input50}
              onChange={(e) => {
                setInput50(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input51}
              onChange={(e) => {
                setInput51(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input52}
              onChange={(e) => {
                setInput52(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input53}
              onChange={(e) => {
                setInput53(handleInput(e));
              }}
            />
          </div>
        </div>
        <div className="sudoku-input-box-row">
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input54}
              onChange={(e) => {
                setInput54(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input55}
              onChange={(e) => {
                setInput55(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input56}
              onChange={(e) => {
                setInput56(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input57}
              onChange={(e) => {
                setInput57(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input58}
              onChange={(e) => {
                setInput58(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input59}
              onChange={(e) => {
                setInput59(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input60}
              onChange={(e) => {
                setInput60(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input61}
              onChange={(e) => {
                setInput61(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input62}
              onChange={(e) => {
                setInput62(handleInput(e));
              }}
            />
          </div>
        </div>
        <div className="sudoku-input-box-row">
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input63}
              onChange={(e) => {
                setInput63(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input64}
              onChange={(e) => {
                setInput64(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input65}
              onChange={(e) => {
                setInput65(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input66}
              onChange={(e) => {
                setInput66(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input67}
              onChange={(e) => {
                setInput67(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input68}
              onChange={(e) => {
                setInput68(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input69}
              onChange={(e) => {
                setInput69(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input70}
              onChange={(e) => {
                setInput70(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input71}
              onChange={(e) => {
                setInput71(handleInput(e));
              }}
            />
          </div>
        </div>
        <div className="sudoku-input-box-row">
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input72}
              onChange={(e) => {
                setInput72(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input73}
              onChange={(e) => {
                setInput73(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input74}
              onChange={(e) => {
                setInput74(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input75}
              onChange={(e) => {
                setInput75(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input76}
              onChange={(e) => {
                setInput76(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input77}
              onChange={(e) => {
                setInput77(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input78}
              onChange={(e) => {
                setInput78(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input79}
              onChange={(e) => {
                setInput79(handleInput(e));
              }}
            />
          </div>
          <div className="sudoku-input-box-cell">
            <input
              type="number"
              value={input80}
              onChange={(e) => {
                setInput80(handleInput(e));
              }}
            />
          </div>
        </div>
      </div>
      <div className="button-box">
        <button onClick={handleCreate}>Create</button>
        <button onClick={handleSolve}>Solve</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default SudokuInputBox;
