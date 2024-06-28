import OpenSCAD from "./openscad.js";
// OPTIONAL: add fonts to the FS
import { addFonts } from "./openscad.fonts.js";
// OPTIONAL: add MCAD library to the FS
import { addMCAD } from "./openscad.mcad.js";

// cylinder(d1=50,d2=0,h=10,$fn=1); use it as a test
function exportSTL(codeInput) {
    let filename = "tetrahedron.stl";
    // const instance = await OpenSCAD({noInitialRun: true});
    const instance = OpenSCAD({noInitialRun: true});
    instance.FS.writeFile("/input.scad", codeInput);

    instance.callMain(["/input.scad", "--enable=manifold", "-o", filename]);
    const output = instance.FS.readFile("/"+filename);

    const link = document.createElement("a");
    link.href = URL.createObjectURL(
    new Blob([output], { type: "application/octet-stream" }), null);
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
}