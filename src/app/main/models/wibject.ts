export class Wibject {
  private _text: String;
  private _imageUrl: String;

  constructor(text: String, imageUrl: String) {
    this._text = text;
    this._imageUrl = imageUrl;
  }

  get text(): String {
    return this._text;
  }

  get imageUrl(): String {
    return this._imageUrl;
  }
}
