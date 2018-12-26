import {Injectable, ɵPublicFeature} from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import {diPublic} from '@angular/core/src/render3/di';

declare const Buffer;


@Injectable()
export class UploadFileService {


  FOLDER = 'test/';

  constructor() {
  }

  uploadfile(file) {

    const bucket = new S3(
      {
        accessKeyId: 'AKIAI7JQ5Z7EDVEHQPHQ',
        secretAccessKey: '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',
        region: 'us-east-1'
      }
    );

    const params = {
      Bucket: 'ds-west',
      Key: this.FOLDER + file.name,
      Body: file,
      ACL        : 'public-read',
      ContentType: 'image/jpeg'
    };

    bucket.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
  }

}
